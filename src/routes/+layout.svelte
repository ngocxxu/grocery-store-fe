<script>
	import '../app.css';
	import Header from '$lib/components/common/Header.svelte';
	import Footer from '$lib/components/common/Footer.svelte';

	export const prerender = true;
	export const trailingSlash = 'always';
</script>

<div class="flex h-screen flex-col">
	<main class="flex-1">
		<Header />
		<slot />
	</main>
	<Footer />
</div>
