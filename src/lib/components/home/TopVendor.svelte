<script lang="ts">
	import { cn } from '$lib/utils';

	const vendorData = [
		{
			name: 'Mira Fashion Pvt. Ltd.',
			sales: 555,
			categories: [
				{
					name: 'Fruits',
					amount: 22
				},
				{
					name: 'Vegetables',
					amount: 22
				},
				{
					name: 'Snacks',
					amount: 22
				}
			]
		},
		{
			name: 'Eelna Fashion Pvt. Ltd.',
			sales: 555,
			categories: [
				{
					name: 'Fruits',
					amount: 22
				},
				{
					name: 'Vegetables',
					amount: 22
				},
				{
					name: 'Snacks',
					amount: 22
				}
			]
		},
		{
			name: 'Mario Fashion Pvt. Ltd.',
			sales: 555,
			categories: [
				{
					name: 'Fruits',
					amount: 22
				},
				{
					name: 'Vegetables',
					amount: 22
				},
				{
					name: 'Snacks',
					amount: 22
				}
			]
		},
		{
			name: 'Maria Fashion Pvt. Ltd.',
			sales: 555,
			categories: [
				{
					name: 'Fruits',
					amount: 22
				},
				{
					name: 'Vegetables',
					amount: 22
				},
				{
					name: 'Snacks',
					amount: 22
				}
			]
		}
	];

	let vendorId = 1;
</script>

<div class="container">
	<div class="mb-8 text-center">
		<h3 class="text-3xl font-medium">Top <span class="text-secondary">Vendors</span></h3>
		<p class="text-sm font-light">
			Discover Our Trusted Partners: Excllence & Reliability in<br />Every choice
		</p>
	</div>

	<div class="flex items-center justify-center gap-6">
		<div class="w-[40%]">
			<img class="rounded-3xl" src={`/img/vendor/img-${vendorId}.jpg`} alt={`Vendor ${vendorId}`} />
		</div>

		<div class="flex w-[60%] flex-col gap-6">
			{#each vendorData as item, i (item.name)}
				<button
					class={cn(
						'flex items-start justify-between rounded-3xl border  bg-carousel p-6',
						i + 1 === vendorId && 'border-secondary'
					)}
					on:click={() => (vendorId = i + 1)}
				>
					<div>
						<h5
							class={cn(
								'mb-2 text-left text-lg font-medium',
								i + 1 === vendorId && 'text-secondary'
							)}
						>
							{item.name}
						</h5>
						<div class="text-sm font-light">
							{#each item.categories as item2}
								<span>{item2.name} ({item2.amount})</span> |
							{/each}
						</div>
					</div>

					<p class="text-sm">Sales - 587</p>
				</button>
			{/each}
		</div>
	</div>
</div>
