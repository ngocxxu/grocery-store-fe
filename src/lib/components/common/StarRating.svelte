<script lang="ts">
	import Star from '$lib/components/common/Star.svelte';

	// User rating states
	let rating: number | null = null;
	let hoverRating: number | null = null;

	const handleHover = (id: number) => {
		hoverRating = id;
	};
	const handleRate = (id: number) => {
		rating = id;
	};

	let stars = [
		{ id: 1, title: 'One Star' },
		{ id: 2, title: 'Two Stars' },
		{ id: 3, title: 'Three Stars' },
		{ id: 4, title: 'Four Stars' },
		{ id: 5, title: 'Five Stars' }
	];
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
