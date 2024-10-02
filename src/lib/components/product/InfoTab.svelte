<script>
	import { infoData } from '$lib/data';
</script>

<ul class="flex flex-col gap-6">
	{#each infoData as item}
		<li class="flex">
			<p class="w-[10%] font-medium text-gray-500">{item.label}</p>
			<p>{item.value}</p>
		</li>
	{/each}
</ul>
