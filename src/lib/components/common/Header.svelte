<script lang="ts">
	import { goto } from '$app/navigation';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import * as Sheet from '$lib/components/ui/sheet';
	import { headerMenu, product } from '$lib/data';
	import { calDiscount } from '$lib/utils';
	import { LayoutGrid, ShoppingCart, Star, UserRound, X } from 'lucide-svelte';

	import Button from '../ui/button/button.svelte';
	import Input from '../ui/input/input.svelte';
	import CounterNumber from '../product/CounterNumber.svelte';

	let count = 1;
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
			<Sheet.Content class="flex flex-col justify-between">
				<Sheet.Header>
					<Sheet.Title class="mb-2">My cart</Sheet.Title>
					<Sheet.Description class="relative">
						<div class="flex items-center gap-4 rounded-2xl border bg-carousel p-4">
							<img
								class="w-20 rounded-2xl border"
								src={`/img/product/${0 + 1}.jpg`}
								alt={`Product ${0 + 1}`}
							/>
							<div>
								<p class="font-medium">{product.name}</p>
								<p class="font-semibold">
									${calDiscount(product.price, product.discount)}
									<span class="text-sm font-light"
										>x {product.weightOptions[0].weight + product.weightOptions[0].unit}</span
									>
								</p>
								<CounterNumber bind:value={count} />
							</div>
						</div>

						<Button
							variant="outline-3"
							size="icon"
							class="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-primary p-0"
						>
							<X class="h-3 w-3" color="white" />
						</Button>
					</Sheet.Description>
				</Sheet.Header>

				<div class="border-t">
					<div class="my-4 flex flex-col gap-2">
						<div class="flex items-center justify-between">
							<p class="font-medium text-gray-500">Sub-Total :</p>
							<p>$300.00</p>
						</div>
						<div class="flex items-center justify-between">
							<p class="font-medium text-gray-500">VAT (20%) :</p>
							<p>$60.00</p>
						</div>
						<div class="flex items-center justify-between">
							<p class="font-medium text-gray-500">Total :</p>
							<p>$360.00</p>
						</div>
					</div>

					<Sheet.Footer>
						<Sheet.Close asChild let:builder>
							<div class="flex w-full items-center justify-between">
								<Button variant="outline">View Cart</Button>
								<Button builders={[builder]} type="submit">Checkout</Button>
							</div>
						</Sheet.Close>
					</Sheet.Footer>
				</div>
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
