<script lang="ts">
	import { getPost } from '$lib/content/posts';
	import IconRow from '$lib/components/IconRow.svelte';
	import TagBadge from '$lib/components/TagBadge.svelte';
	import Carousel from '$lib/components/Carousel.svelte';

	let { data }: { data: { slug: string } } = $props();
	const post = $derived(getPost(data.slug)!);
</script>

<svelte:head>
	<title>{post.title} · Nick Hermann</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-6 py-12">
	<a href="/" class="text-sm text-ink-soft transition-colors hover:text-primary hover:underline">
		← Zurück zur Startseite
	</a>

	<h1 class="mt-6 text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
		{post.title}
	</h1>

	<div class="mt-6">
		<IconRow icons={post.icons} />
	</div>

	<div class="mt-4 flex flex-wrap gap-2">
		{#each post.tags as tag (tag)}
			<TagBadge label={tag} />
		{/each}
	</div>

	<div
		class="prose prose-neutral dark:prose-invert mt-8 max-w-none
			prose-headings:font-sans prose-p:text-ink-soft prose-p:leading-relaxed
			prose-a:text-primary prose-a:underline prose-a:decoration-accent prose-a:underline-offset-4
			hover:prose-a:text-accent-strong"
	>
		<post.component />
	</div>

	{#if post.images && post.images.length > 0}
		<div class="mt-10">
			<Carousel images={post.images} alt={post.title} />
		</div>
	{/if}
</div>
