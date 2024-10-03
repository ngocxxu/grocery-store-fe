<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';

	const plugin = Autoplay({ delay: 3000, stopOnInteraction: true });
</script>

<Carousel.Root
	plugins={[plugin]}
	class="relative w-full max-w-xl"
	on:mousenter={plugin.stop}
	on:mouseleave={plugin.reset}
>
	<Carousel.Content>
		{#each Array(4) as _, i (i)}
			<Carousel.Item>
				<Card.Root>
					<Card.Content class="flex aspect-square items-center justify-center">
						<img src={`/img/product/${i + 1}.jpg`} alt={`Product ${i + 1}`} />
					</Card.Content>
				</Card.Root>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<div class="absolute -bottom-6 left-1/2">
		<Carousel.Previous />
		<Carousel.Next />
	</div>
</Carousel.Root>
