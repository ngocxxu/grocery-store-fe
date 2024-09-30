<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import * as Sheet from '$lib/components/ui/sheet';
	import { LayoutGrid, UserRound, Star, ShoppingCart } from 'lucide-svelte';
	import Button from '../ui/button/button.svelte';
	import Input from '../ui/input/input.svelte';
	import { goto } from '$app/navigation';

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
	<div class="flex gap-8">
		<HoverCard.Root openDelay={200}>
			<HoverCard.Trigger>
				<button class="flex gap-2">
					<UserRound color="hsl(var(--secondary))" size={35} />
					<div>
						<p class="text-xs">Account</p>
						<p class="font-medium">Login</p>
					</div>
				</button>
			</HoverCard.Trigger>
			<HoverCard.Content class="w-fit" sideOffset={-4}>
				<div class="flex flex-col items-start gap-2 text-[13px] text-gray-500">
					<button class="hover:text-secondary">Register</button>
					<button class="hover:text-secondary">Checkout</button>
					<button class="hover:text-secondary">Login</button>
				</div>
			</HoverCard.Content>
		</HoverCard.Root>

		<button class="flex gap-2" on:click={() => goto('/wishlist')}>
			<Star color="hsl(var(--secondary))" size={35} />
			<div>
				<p class="text-xs">
					<span class="font-semibold">3</span>
					Items
				</p>
				<p class="font-medium">Wishlist</p>
			</div>
		</button>

		<Sheet.Root>
			<Sheet.Trigger
				><button class="flex gap-2">
					<ShoppingCart color="hsl(var(--secondary))" size={35} />
					<div>
						<p class="text-xs">
							<span class="font-semibold">5</span>
							Items
						</p>
						<p class="font-medium">Cart</p>
					</div>
				</button></Sheet.Trigger
			>
			<Sheet.Content>
				<Sheet.Header>
					<Sheet.Title>Are you sure absolutely sure?</Sheet.Title>
					<Sheet.Description>
						This action cannot be undone. This will permanently delete your account and remove your
						data from our servers.
					</Sheet.Description>
				</Sheet.Header>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</div>
<div class="border-y-1 border">
	<div class="container flex items-center">
		<Button class="p-0 px-2" variant="outline-2">
			<LayoutGrid />
		</Button>
		<div class="p-4">
			{#each headerMenu as item (item.name)}
				<a class="p-5 font-medium hover:text-secondary" href={item.href}>{item.name}</a>
			{/each}
		</div>
	</div>
</div>
