<script lang="ts">
	const headerMenu = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Category',
			href: '/category'
		},
		{
			name: 'About us',
			href: '/about'
		},
		{
			name: 'Contact us',
			href: '/contact'
		}
	];
</script>

<div class="p-4">
	{#each headerMenu as item}
		<a class="p-5 font-medium hover:text-secondary" href={item.href}>{item.name}</a>
	{/each}
</div>
