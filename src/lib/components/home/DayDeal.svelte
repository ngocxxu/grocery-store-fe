<script lang="ts">
	import ProductCard from '../common/ProductCard.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
</script>

<div class="container">
	<div class="mb-8 flex items-center justify-between">
		<div>
			<h3 class="text-3xl font-medium">Day Of The <span class="text-secondary">Deal</span></h3>
			<p class="font-extralight">Don't wait. The time will never be just right.</p>
		</div>
		<div class="rounded-2xl border bg-carousel px-4 py-3 font-semibold">
			935 <span class="font-normal">Days</span> 10 : 7 : 10
		</div>
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
