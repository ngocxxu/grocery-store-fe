<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';

	const tabData = [
		{
			label: 'All',
			value: 'all'
		},
		{ label: 'Snack & Spices', value: 'snacks' },
		{ label: 'Fruits', value: 'fruits' },
		{ label: 'Vegetables', value: 'vegetables' }
	];

	let currentTab = tabData[0].value;
</script>

<div class="container relative mb-8">
	<div class="absolute -top-6">
		<h3 class="text-3xl font-medium">New <span class="text-secondary">Arrivals</span></h3>
		<p class="font-extralight">Shop online for new arrivals and get free shipping!</p>
	</div>

	<Tabs.Root value={currentTab}>
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

		{#each tabData as item (item.value)}
			<Tabs.Content value={item.value}>{item.label}</Tabs.Content>
		{/each}
	</Tabs.Root>
</div>
