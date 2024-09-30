<script lang="ts">
	import Carousel from '$lib/components/home/Carousel.svelte';
	import DayDeal from '$lib/components/home/DayDeal.svelte';
	import ExploreCategory from '$lib/components/home/ExploreCategory.svelte';
	import PosterFood from '$lib/components/home/PosterFood.svelte';
</script>

<div class="flex flex-col gap-24">
	<Carousel />
	<ExploreCategory />
	<DayDeal />
	<PosterFood/>
</div>
