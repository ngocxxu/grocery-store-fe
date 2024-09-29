<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Button from '../ui/button/button.svelte';

	const plugin = Autoplay({ delay: 4000, stopOnInteraction: true });

	const carouselData = [
		{
			highlightText: 'Healthy',
			lastText: '& Fresh Fruits'
		},
		{
			highlightText: 'Warm',
			lastText: 'Fast Food & Snacks'
		},
		{
			highlightText: 'Organic',
			lastText: '& Fresh Vegetable'
		}
	];
</script>

<Carousel.Root
	plugins={[plugin]}
	class="relative w-full"
	on:mousenter={plugin.stop}
	on:mouseleave={plugin.reset}
>
	<Carousel.Content>
		{#each carouselData as item, i (i)}
			<Carousel.Item>
				<Card.Root class="border-none bg-carousel">
					<div class="container">
						<Card.Content class="flex items-center justify-center p-0">
							<div class="flex w-1/2 flex-col gap-4">
								<p class="text-gray-400">Flat 30% Off</p>
								<h1 class="text-5xl font-semibold leading-normal">
									Explore <span class="text-secondary">{item.highlightText}</span>
									<br />
									{item.lastText}
								</h1>
								<Button class="w-fit" variant="outline">Show Now</Button>
							</div>
							<div class="w-1/2">
								<img src={`/img/slider/hero-${i + 1}.png`} alt={`Product ${i + 1}`} />
							</div>
						</Card.Content>
					</div>
				</Card.Root>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous class="absolute left-0 top-1/2" />
	<Carousel.Next class="absolute right-0 top-1/2" />
</Carousel.Root>
