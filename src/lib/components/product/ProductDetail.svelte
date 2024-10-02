<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as Tabs from '$lib/components/ui/tabs';
	import { charaterProduct, product } from '$lib/data';
	import { createBoolArray } from '$lib/utils';
	import { Eye, Heart } from 'lucide-svelte';

	import ProductCard from '../common/ProductCard.svelte';
	import Star from '../common/Star.svelte';
	import Button from '../ui/button/button.svelte';
	import CounterNumber from './CounterNumber.svelte';
	import DetailTab from './DetailTab.svelte';
	import InfoTab from './InfoTab.svelte';
	import ReviewsTab from './ReviewsTab.svelte';

	export const tabProductDetail = [
		{
			label: 'Detail',
			value: 'detail',
			data: DetailTab
		},
		{ label: 'Information', value: 'info', data: InfoTab },
		{ label: 'Reviews', value: 'reviews', data: ReviewsTab }
	];

	let weightValue = product.weightOptions[0].weight;
</script>

<div class="container flex flex-col gap-24">
	<div>
		<div class="flex items-start gap-6">
			<div>img</div>

			<div class="flex flex-col gap-6">
				<h4 class="text-2xl font-medium">{product.name}</h4>
				<div class="flex items-center">
					<div class="flex gap-1">
						{#each createBoolArray(4) as item, i (i)}
							<Star filled={item} />
						{/each}
					</div>
					<p class="mx-2">|</p>
					<p class="font-light text-secondary">992 Ratings</p>
				</div>

				<p class="font-light">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nihil laboriosam voluptatem
					ab consectetur dolorum id, soluta sunt at culpa commodi totam quod natus qui!
				</p>

				<div>
					<div class="flex justify-between text-xl font-semibold">
						<h4>$923.00 -78%</h4>
						<h4>SKU#: WH12</h4>
					</div>
					<div class="flex justify-between">
						<p>M.R.P. : <span class="line-through">$1,999.00</span></p>
						<p class="text-xl text-secondary">In stock</p>
					</div>
				</div>

				<ul class="flex flex-col gap-2 text-[14px] text-gray-500">
					{#each charaterProduct as item, i}
						<li class="flex">
							<p class="w-[12%]">{item.label} :&nbsp;</p>
							<p>{item.value}</p>
						</li>
					{/each}
				</ul>

				<div>
					<h4 class="mb-4 font-semibold">WEIGHT</h4>
					<div class="flex items-center gap-2">
						{#each product.weightOptions as item}
							<button
								class="rounded-xl border px-4 py-2 text-sm {weightValue === item.weight &&
									'bg-secondary text-white'}"
								on:click={() => (weightValue = item.weight)}>{item.weight + ' ' + item.unit}</button
							>
						{/each}
					</div>
				</div>

				<div class="flex gap-2">
					<CounterNumber />
					<Button class="rounded-xl" variant="secondary">Add to Cart</Button>
					<Button class="rounded-xl" variant="default">Buy Now</Button>
					<Button class="rounded-xl border-input p-3 text-gray-500" variant="outline">
						<Heart class="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>

		<Tabs.Root class="mt-12" value={tabProductDetail[0].value}>
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
