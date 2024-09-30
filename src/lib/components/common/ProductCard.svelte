<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Star from '$lib/components/common/Star.svelte';
	import { createBoolArray } from '$lib/utils';
</script>

<Card.Root class="rounded-2xl">
	<Card.Content class="p-0">
		<img class="rounded-2xl" src={`/img/product/${0 + 1}.jpg`} alt={`Product ${0 + 1}`} />
	</Card.Content>

	<Card.Footer class="border-t p-5">
		<div class="flex w-full flex-col gap-1.5">
			<div class="flex items-center justify-between">
				<p class="text-sm font-extralight">Chocos</p>
				<div class="flex gap-1">
					{#each createBoolArray(4) as item, i (i)}
						<Star filled={item} starId={3} />
					{/each}
				</div>
			</div>
			<p class="text-sm">Mixed Fruits Chocolates Pack</p>
			<div class="flex justify-between">
				<p class="font-semibold">
					$25 <span class="ml-1.5 text-sm font-light line-through">$30</span>
				</p>
				<p class="text-sm font-light">1 Pack</p>
			</div>
		</div>
	</Card.Footer>
</Card.Root>
