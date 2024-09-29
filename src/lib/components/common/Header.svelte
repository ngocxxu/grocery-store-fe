<script lang="ts">
	import { LayoutGrid, UserRound, Star, ShoppingCart } from 'lucide-svelte';
	import Button from '../ui/button/button.svelte';
	import Input from '../ui/input/input.svelte';

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

<div class="container flex items-center justify-between py-4">
	<a href="/">
		<img src="/img/logo.png" alt="Logo" />
	</a>
	<Input class="w-1/2" placeholder="Search" />
	<div class="flex gap-6">
		<div class="flex gap-2">
			<UserRound color="hsl(var(--secondary))" size={35} />
			<div>
				<p class="text-xs">Account</p>
				<p class="font-medium">Login</p>
			</div>
		</div>

		<div class="flex gap-2">
			<Star color="hsl(var(--secondary))" size={35} />
			<div>
				<p class="text-xs">
					<span class="font-semibold">3</span>
					Items
				</p>
				<p class="font-medium">Wishlist</p>
			</div>
		</div>

		<div class="flex gap-2">
			<ShoppingCart color="hsl(var(--secondary))" size={35} />
			<div>
				<p class="text-xs">
					<span class="font-semibold">5</span>
					Items
				</p>
				<p class="font-medium">Cart</p>
			</div>
		</div>
	</div>
</div>
<div class="border-y-1 border">
	<div class="container flex items-center">
		<Button class="p-0 px-2" variant="outline-2">
			<LayoutGrid />
		</Button>
		<div class="p-4">
			{#each headerMenu as item, i (i)}
				<a class="p-5 font-medium hover:text-secondary" href={item.href}>{item.name}</a>
			{/each}
		</div>
	</div>
</div>
