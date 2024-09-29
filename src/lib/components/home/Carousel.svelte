<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Button from '../ui/button/button.svelte';

	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
</script>

<Carousel.Root
	plugins={[plugin]}
	class="relative w-full"
	on:mousenter={plugin.stop}
	on:mouseleave={plugin.reset}
>
	<Carousel.Content>
		{#each Array(1) as _, i (i)}
			<Carousel.Item>
				<Card.Root class="border-none">
					<div class="container">
						<Card.Content class="flex items-center justify-center p-0">
							<div class="w-1/2 flex flex-col gap-4">
								<p class="text-gray-400">Flat 30% Off</p>
								<h1 class="text-5xl font-semibold leading-normal">
									Explore <span class="text-secondary">Organic</span>
									<br />
									& Fresh Vegetable
								</h1>
								<Button class='w-fit' variant="outline">Show Now</Button>
							</div>
							<div class="w-1/2">
								<img src="/img/slider/hero-1.png" alt="Product" />
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
