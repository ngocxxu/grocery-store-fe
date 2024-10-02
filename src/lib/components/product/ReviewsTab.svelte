<script>
	import { createBoolArray } from '$lib/utils';

	import Star from '../common/Star.svelte';
	import StarRating from '../common/StarRating.svelte';
</script>

<div>
	<div class="flex flex-col gap-6">
		<div class="flex items-start gap-2">
			<img class="w-[5%] rounded-2xl" src="/img/avatar/1.jpg" alt="avatar 1" />
			<div class="flex flex-col gap-1">
				<p class="font-medium">Mariya Lykra</p>
				<div class="flex gap-1">
					{#each createBoolArray(4) as item, i (i)}
						<Star filled={item} />
					{/each}
				</div>
				<p class="text-[14px]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, hic expedita asperiores eos
					neque cumque impedit quam, placeat laudantium soluta repellendus possimus a distinctio
					voluptate veritatis nostrum perspiciatis est! Commodi!
				</p>
			</div>
		</div>
	</div>

	<div class="mt-6">
		<h4 class="mb-2 text-xl font-semibold">Add a Review</h4>
		<div class="flex items-center gap-2">
			<p class="font-semibold">Your rating:</p>
			<StarRating />
		</div>
	</div>
</div>
