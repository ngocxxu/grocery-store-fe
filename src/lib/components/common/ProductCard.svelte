<script lang="ts">
	import Star from '$lib/components/common/Star.svelte';
	import * as Card from '$lib/components/ui/card';
	import { actionsProduct } from '$lib/data';
	import { calDiscount, createBoolArray } from '$lib/utils';

	import type { TProductProps } from '../../../types';
	import Button from '../ui/button/button.svelte';

	export const product: TProductProps = {
		id: 1,
		name: 'Ground Nuts Oil Pack 52g',
		price: 52,
		rating: 4,
		image: [],
		unit: 'Pack',
		type: 'Snacks',
		quantity: 100,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptatum. Vitae dolores alias repellat eligendi, officiis, exercitationem corporis quisquam delectus cum non',
		sku: 'WH12',
		status: 'In stock',
		discount: 30
	};

	let isVisible = false;
</script>

<Card.Root class="rounded-2xl">
	<Card.Content class="relative p-0">
		<div
			on:mouseenter={() => (isVisible = true)}
			on:mouseleave={() => (isVisible = false)}
			role="button"
			tabindex="0"
		>
			<img class="rounded-2xl" src={`/img/product/${0 + 1}.jpg`} alt={`Product ${0 + 1}`} />
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
					${product.price}
					<span class="ml-1.5 text-sm font-light line-through"
						>${calDiscount(product.price, product.discount)}</span
					>
				</p>
				<p class="text-sm font-light">1 {product.unit}</p>
			</div>
		</div>
	</Card.Footer>
</Card.Root>
