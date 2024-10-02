<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as Tabs from '$lib/components/ui/tabs';

	import ProductCard from '../common/ProductCard.svelte';
	import DetailTab from '../product/DetailTab.svelte';
	import InfoTab from '../product/InfoTab.svelte';
	import ReviewsTab from '../product/ReviewsTab.svelte';

	export const tabProductDetail = [
		{
			label: 'Detail',
			value: 'detail',
			data: DetailTab
		},
		{ label: 'Information', value: 'info', data: InfoTab },
		{ label: 'Reviews', value: 'reviews', data: ReviewsTab }
	];
</script>

<div class="container flex flex-col gap-24">
	<div>
		<div></div>

		<Tabs.Root value={tabProductDetail[0].value}>
			<Tabs.List class="bg-transparent">
				{#each tabProductDetail as item, i (item.value)}
					<Tabs.Trigger
						class="text-md data-[state=active]:text-secondary data-[state=active]:shadow-none"
						value={item.value}>{item.label}</Tabs.Trigger
					>

					{#if i < tabProductDetail.length - 1}/
					{/if}
				{/each}
			</Tabs.List>

			{#each tabProductDetail as item2 (item2.value)}
				<Tabs.Content class="rounded-2xl border p-4 font-light" value={item2.value}
					><svelte:component this={item2.data} /></Tabs.Content
				>
			{/each}
		</Tabs.Root>
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
