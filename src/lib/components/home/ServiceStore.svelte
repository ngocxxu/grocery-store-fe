<script lang="ts">
	import { serviceData } from '$lib/data';
</script>

<div class="container grid grid-cols-4 gap-4">
	{#each serviceData as item, i (item.title)}
		<div class="flex flex-col items-center justify-center gap-2 rounded-2xl border p-8">
			<img class="h-14 w-14" src={`/img/category/${i + 1}.png`} alt={`Service ${i + 1}`} />
			<h4 class="text-lg font-semibold">{item.title}</h4>
			<p class="text-center text-sm font-light">{item.description}</p>
		</div>
	{/each}
</div>
