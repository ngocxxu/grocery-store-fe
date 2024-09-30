<script lang="ts">
	import Button from '../ui/button/button.svelte';
</script>

<div class="container grid grid-cols-2 gap-4">
	<div
		class="col-span-1 flex items-center justify-center gap-10 rounded-3xl bg-orange-100 px-8 py-6"
	>
		<img class="max-w-[280px]" src="/img/category/one.png" alt="One" />
		<div class="flex flex-col gap-3">
			<h3 class="text-3xl font-semibold">Tasty Snack & Fast Food</h3>
			<p class="font-extralight">The flavour of something special</p>
			<Button class="w-fit bg-transparent" variant="outline">Shop Now</Button>
		</div>
	</div>

	<div class="col-span-1 flex items-center justify-center gap-10 rounded-3xl bg-red-100 px-8 py-6">
		<img class="max-w-[280px]" src="/img/category/two.png" alt="Two" />
		<div class="flex flex-col gap-3">
			<h3 class="text-3xl font-semibold">Tasty Snack & Fast Food</h3>
			<p class="font-extralight">The flavour of something special</p>
			<Button class="w-fit bg-transparent" variant="outline">Shop Now</Button>
		</div>
	</div>
</div>
