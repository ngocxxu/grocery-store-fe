<script lang="ts">
	import Star from '$lib/components/common/Star.svelte';
	import * as Card from '$lib/components/ui/card';
	import { actionsProduct, product } from '$lib/data';
	import { calDiscount, createBoolArray } from '$lib/utils';

	import Button from '../ui/button/button.svelte';

	let isVisible = false;
</script>

<Card.Root class="rounded-2xl">
	<Card.Content class="relative overflow-hidden rounded-2xl p-0">
		<div
			on:mouseenter={() => (isVisible = true)}
			on:mouseleave={() => (isVisible = false)}
			role="button"
			tabindex="0"
		>
			<img
				class="rounded-2xl transition-transform duration-300 ease-in-out {isVisible && 'scale-110'}"
				src={`/img/product/${0 + 1}.jpg`}
				alt={`Product ${0 + 1}`}
			/>
			{#if isVisible}
				<div class="absolute bottom-3 right-1/2 translate-x-1/2">
					<div class="flex items-center gap-3">
						{#each actionsProduct as item}
							<Button
								class="h-9 w-9 rounded-xl p-0"
								title={item.name}
								variant="outline-3"
								size="icon"
							>
								<svelte:component this={item.icon} class="h-5 w-5" />
							</Button>
						{/each}
					</div>
				</div>
			{:else}
				<p
					class="orientText absolute left-1.5 top-2 text-sm uppercase transition-opacity duration-300 ease-in-out"
				>
					{product.status}
				</p>
			{/if}
		</div>
	</Card.Content>

	<Card.Footer class="border-t p-5">
		<div class="flex w-full flex-col gap-1.5">
			<div class="flex items-center justify-between">
				<p class="text-sm font-extralight">{product.type}</p>
				<div class="flex gap-1">
					{#each createBoolArray(product.rating) as item, i (i)}
						<Star filled={item} />
					{/each}
				</div>
			</div>
			<p class="text-sm">{product.name}</p>
			<div class="flex justify-between">
				<p class="font-semibold">
					${calDiscount(product.price, product.discount)}
					<span class="ml-1.5 text-sm font-light line-through">${product.price}</span>
				</p>
				<p class="text-sm font-light">
					{product.weightOptions[0].weight + product.weightOptions[0].unit}
				</p>
			</div>
		</div>
	</Card.Footer>
</Card.Root>

<style>
	.orientText {
		writing-mode: vertical-rl;
		text-orientation: upright;
	}
</style>
