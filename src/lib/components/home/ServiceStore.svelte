<script lang="ts">
	const serviceData = [
		{
			title: 'Free Shipping',
			description: 'Free shipping on all Us order or above $200'
		},
		{
			title: '24x7 Support',
			description: 'Contact us 24 hours a day, 7 days a week'
		},
		{ title: '30 Days Return', description: 'Simply return it within 30 days for an exchange' },
		{ title: 'Payment Secure', description: 'Contact us 24 hours a day, 7 days a week' }
	];
</script>

<div class="container grid grid-cols-4 gap-4">
	{#each serviceData as item, i (item.title)}
		<div class="flex flex-col items-center justify-center rounded-2xl border p-8 gap-2">
			<img class="h-14 w-14" src={`/img/category/${i + 1}.png`} alt={`Service ${i + 1}`} />
			<h4 class="text-lg font-semibold">{item.title}</h4>
			<p class="text-center text-sm font-light">{item.description}</p>
		</div>
	{/each}
</div>
