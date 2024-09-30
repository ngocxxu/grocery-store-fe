<script lang="ts">
	export let title = 'star';
	export let filled = false;
	export let starId;
	export let width = 16;
	export let height = 16;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{width}
	{height}
	viewBox="0 0 51 48"
	on:mouseover
	on:mouseleave
	on:click
	on:keydown
	on:focus
	data-starid={starId}
	role="button"
	tabindex="0"
>
	<title>{title}</title>
	<path
		class:filled
		data-starid={starId}
		class="starPath"
		d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
	/>
</svg>

<style>
	.starPath {
		fill: none;
		stroke: #999;
	}
	.filled {
		fill: #fea99a;
    stroke: none;
	}
</style>
