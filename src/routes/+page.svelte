<script lang="ts">
	import Carousel from '$lib/components/home/Carousel.svelte';
	import DayDeal from '$lib/components/home/DayDeal.svelte';
	import ExploreCategory from '$lib/components/home/ExploreCategory.svelte';
	import HomeBanner from '$lib/components/home/HomeBanner.svelte';
	import NewArrivals from '$lib/components/home/NewArrivals.svelte';
	import PosterFood from '$lib/components/home/PosterFood.svelte';
	import ServiceStore from '$lib/components/home/ServiceStore.svelte';
	import TopVendor from '$lib/components/home/TopVendor.svelte';
</script>

<div class="flex flex-col gap-24">
	<Carousel />
	<ExploreCategory />
	<DayDeal />
	<PosterFood />
	<HomeBanner />
	<NewArrivals />
	<ServiceStore />
	<TopVendor />
</div>
