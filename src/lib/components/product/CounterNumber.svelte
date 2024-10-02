<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	import Input from '../ui/input/input.svelte';

	type $Props = HTMLAttributes<HTMLInputElement> & {
		value?: number;
	};

	let className: $Props['class'] = undefined;
	export { className as class };
	export let value = 1;

	const onChange = (e: Event) => {
		const input = e.target as HTMLInputElement;
		let newValue = input.value.replace(/[^0-9]/g, '');

		// Limit items 1-99
		const numValue = parseInt(newValue);
		if (numValue < 1) newValue = '1';
		if (numValue > 99) newValue = '99';

		value = Number(newValue);
	};

	const decrement = () => (value = Math.max(1, value - 1));
	const increment = () => (value = Math.min(99, value + 1));
</script>

<div class={cn('flex w-fit items-center rounded-lg border bg-white', className)}>
	<button class="rounded-lg px-1 text-xl font-medium" on:click={decrement}>-</button>
	<Input
		class="m-0 h-6 w-10 border-none p-0 text-center focus-visible:ring-transparent"
		type="text"
		{value}
		on:input={onChange}
		pattern="[0-9]*"
		inputmode="numeric"
		min="1"
		max="99"
	/>
	<button class="rounded-lg px-1 text-xl font-medium" on:click={increment}>+</button>
</div>
