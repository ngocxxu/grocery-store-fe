<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import ProductCard from '../common/ProductCard.svelte';

	const tabData = [
		{
			label: 'All',
			value: 'all',
			data: Array(5)
		},
		{ label: 'Snack & Spices', value: 'snacks', data: Array(2) },
		{ label: 'Fruits', value: 'fruits', data: Array(3) },
		{ label: 'Vegetables', value: 'vegetables', data: Array(8) }
	];
</script>

<div class="container relative mb-8">
	<div class="absolute -top-6">
		<h3 class="text-3xl font-medium">New <span class="text-secondary">Arrivals</span></h3>
		<p class="text-sm font-light">Shop online for new arrivals and get free shipping!</p>
	</div>

	<Tabs.Root value={tabData[0].value}>
		<Tabs.List class="flex justify-end bg-transparent">
			{#each tabData as item, i (item.value)}
				<Tabs.Trigger
					class="text-lg data-[state=active]:text-secondary data-[state=active]:shadow-none"
					value={item.value}>{item.label}</Tabs.Trigger
				>

				{#if i < tabData.length - 1}/
				{/if}
			{/each}
		</Tabs.List>

		{#each tabData as item2 (item2.value)}
			<Tabs.Content value={item2.value}>
				<div class="grid grid-cols-4 gap-4">
					{#each item2.data as _, i (i)}
						<ProductCard />
					{/each}
				</div>
			</Tabs.Content>
		{/each}
	</Tabs.Root>
</div>
