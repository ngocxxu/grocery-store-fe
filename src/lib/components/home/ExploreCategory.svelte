<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { cn } from '$lib/utils';
	import Autoplay from 'embla-carousel-autoplay';

	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });

	const categoryData = [
		{
			color: 'bg-green-200',
			category: 'Fruits',
			amount: 222,
			url: '/svg/category/1.svg'
		},
		{ color: 'bg-purple-200', category: 'Cold Drinks', amount: 22, url: '/svg/category/2.svg' },
		{ color: 'bg-yellow-200', category: 'Bakery', amount: 22, url: '/svg/category/3.svg' },
		{ color: 'bg-red-200', category: 'Vegetables', amount: 22, url: '/svg/category/4.svg' }
	];
</script>

<div class="container flex justify-center gap-4">
	<img class="w-[40%] rounded-3xl" src="/img/category/category.jpg" alt="category" />
	<div class="w-[60%]">
		<h1 class="text-[120px]">
			Explore<br />Categories
		</h1>
		<Carousel.Root
			plugins={[plugin]}
			opts={{
				align: 'start'
			}}
			class="w-full"
		>
			<Carousel.Content>
				{#each [...categoryData, ...categoryData] as item, i (i)}
					<Carousel.Item class="md:basis-1/3 lg:basis-1/4">
						<Card.Root class="border-none">
							<Card.Content
								class={cn(
									'flex aspect-square items-center justify-center rounded-2xl ',
									item.color
								)}
							>
								<div class="flex flex-col items-center">
									<img class="h-12 w-12" src={item.url} alt={`Category ${i + 1}`} />
									<h3 class="font-medium">{item.category}</h3>
									<p class="text-xs font-extralight">{item.amount} items</p>
								</div>
							</Card.Content>
						</Card.Root>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</div>
</div>
