<script lang="ts">
	import { page } from '$app/stores';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';

	let pathnames = '';
	let formatPaths: { label: string; value: string }[] = [];
	let routeUrls: { label: string; value: string }[] = [];
	let lastUrl: { label: string; value: string };

	$: {
		pathnames = $page.route.id ?? '';
		formatPaths = pathnames
			.replace(/\[.*?\]/g, '')
			.split('/')
			.filter((part) => part !== '')
			.map((item) => ({
				label: item,
				value: `/${item}`
			}));

		routeUrls = [
			{
				label: 'home',
				value: '/'
			},
			...formatPaths
		];

		lastUrl = routeUrls[routeUrls.length - 1];
	}
</script>

<div class="bg-carousel">
	<div class="container flex items-center justify-between py-5 capitalize">
		<p class="font-semibold">{lastUrl.label} page</p>
		<Breadcrumb.Root>
			<Breadcrumb.List>
				{#each routeUrls.splice(0, routeUrls.length - 1) as item}
					<Breadcrumb.Item>
						<Breadcrumb.Link href={item.value}>{item.label}</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
				{/each}

				<Breadcrumb.Item>
					<Breadcrumb.Page class="font-medium">{lastUrl.label}</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	</div>
</div>
