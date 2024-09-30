<script lang="ts">
	import Star from '$lib/components/common/Star.svelte';
	import { stars } from '$lib/data';

	// User rating states
	let rating: number | null = null;
	let hoverRating: number | null = null;

	const handleHover = (id: number) => {
		hoverRating = id;
	};
	const handleRate = (id: number) => {
		rating = id;
	};
</script>

<div class="relative">
	<div class="flex gap-1">
		{#each stars as star (star.id)}
			<Star
				filled={hoverRating ? hoverRating >= star.id : rating !== null && rating >= star.id}
				starId={star.id}
				on:mouseover={() => handleHover(star.id)}
				on:mouseleave={() => (hoverRating = null)}
				on:click={() => handleRate(star.id)}
			/>
		{/each}
	</div>
</div>
