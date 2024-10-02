<script>
	import { page } from '$app/stores';

	import BreadcrumbBar from './../lib/components/common/BreadcrumbBar.svelte';

	import '../app.css';

	import Footer from '$lib/components/common/Footer.svelte';
	import Header from '$lib/components/common/Header.svelte';
</script>

<div class="flex h-screen flex-col">
	<main class="flex-1">
		<Header />
		{#if $page.route.id !== '/'}
			<BreadcrumbBar />
		{/if}
		<slot />
	</main>
	<Footer />
</div>
