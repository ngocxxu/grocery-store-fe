<script>
	import Button from '../ui/button/button.svelte';
</script>

<div class="banner-container">
	<div class="absolute bottom-0 right-1/4 rounded-t-3xl bg-white p-6">
		<div class='flex flex-col gap-6'>
			<p class="text-lg font-semibold text-secondary">25% Off</p>
			<h1 class="text-5xl font-semibold">Fresh & Organic<br />Vegetables</h1>
			<Button class="w-fit" variant="outline">Show Now</Button>
		</div>
	</div>
</div>

<style>
	.banner-container {
		background-image: url('/img/banner.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		min-height: 600px;
		position: relative;
	}
</style>
