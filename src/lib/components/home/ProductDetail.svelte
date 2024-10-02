<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	import ProductCard from '../common/ProductCard.svelte';
</script>

<div class="container flex flex-col gap-24">
	<div>
		<div></div>
		<div></div>
	</div>
	<div>
		<div class="mb-8 text-center">
			<h3 class="text-3xl font-medium">Related <span class="text-secondary">Product</span></h3>
			<p class="text-sm font-light">Browse The Collection of Top Products.</p>
		</div>
		<Carousel.Root
			opts={{
				align: 'start'
			}}
			class="w-full"
		>
			<Carousel.Content>
				{#each Array(4) as _, i (i)}
					<Carousel.Item class="md:basis-1/3 lg:basis-1/4">
						<ProductCard />
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</div>
</div>
