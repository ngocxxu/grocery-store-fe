<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import Input from '../ui/input/input.svelte';

	type $$Props = HTMLAttributes<HTMLInputElement> & {
		value?: number;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let value = 1;
</script>

<div class={cn('flex w-fit items-center rounded-lg border bg-white', className)}>
	<button class="rounded-lg px-1 text-xl font-medium" on:click={() => (value -= 1)}>-</button>
	<Input
		class="m-0 h-6 w-10 border-none p-0 text-center focus-visible:ring-transparent"
		bind:value
	/>
	<button class="rounded-lg px-1 text-xl font-medium" on:click={() => (value += 1)}>+</button>
</div>
