<script lang="ts">
	import { posts } from '$lib/content/posts';
	import IconRow from '$lib/components/IconRow.svelte';
	import TagBadge from '$lib/components/TagBadge.svelte';
</script>

<svelte:head>
	<title>Nick Hermann · Full-Stack-Entwickler aus Hannover</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-6">
	<section class="flex flex-col-reverse items-center gap-10 py-16 sm:py-24 md:flex-row md:items-center md:justify-between md:gap-16">
		<div class="max-w-xl text-center md:text-left">
			<h1 class="text-4xl leading-[1.05] font-extrabold tracking-tight text-ink sm:text-5xl">
				Hey, ich bin Nick.
			</h1>
			<p class="mt-5 text-lg leading-relaxed text-ink-soft">
				Ich bin Full-Stack-Entwickler aus Hannover. Am liebsten sitze ich mit am Tisch, wenn aus
				einem Problem eine App wird – von der ersten Skizze über das Design bis zu der Zeile Code,
				die live geht.
			</p>
			<div class="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
				<a
					href="mailto:kontakt@nickhrm.de"
					class="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-medium text-paper transition-colors hover:bg-primary-strong"
				>
					Mail schreiben
				</a>
				<a
					href="https://github.com/nickhrm"
					target="_blank"
					rel="noreferrer"
					class="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-medium text-ink transition-colors hover:border-primary hover:text-primary"
				>
					GitHub
				</a>
			</div>
		</div>

		<div class="relative flex-none">
			<div
				class="absolute inset-0 -z-10 scale-125 bg-accent/25 blur-2xl"
				style="border-radius: 42% 58% 65% 35% / 45% 45% 55% 55%;"
				aria-hidden="true"
			></div>
			<img
				src="/pb.jpeg"
				alt="Nick Hermann"
				class="h-36 w-36 border border-line object-cover sm:h-44 sm:w-44"
				style="border-radius: 42% 58% 65% 35% / 45% 45% 55% 55%;"
			/>
		</div>
	</section>

	<section class="pb-24">
		<h2 class="text-2xl font-bold text-ink">Projekte</h2>
		<p class="mt-2 text-ink-soft">Ein paar Dinge, die ich in letzter Zeit gebaut habe.</p>

		<div class="mt-8">
			{#each posts as post (post.slug)}
				<a
					href={`/posts/${post.slug}`}
					class="group relative -mx-6 flex flex-col gap-4 border-t border-line px-6 py-8 transition-colors first:border-t-0 hover:bg-paper-soft sm:flex-row sm:items-center sm:justify-between"
				>
					<span
						class="absolute top-0 left-0 h-full w-1 -translate-x-1 bg-accent opacity-0 transition-opacity group-hover:opacity-100"
						aria-hidden="true"
					></span>
					<div class="flex-1">
						<h3 class="text-xl font-semibold text-ink transition-colors group-hover:text-primary">
							{post.title}
						</h3>
						<div class="mt-3">
							<IconRow icons={post.icons} />
						</div>
						<div class="mt-3 flex flex-wrap gap-2">
							{#each post.tags as tag (tag)}
								<TagBadge label={tag} />
							{/each}
						</div>
					</div>
					{#if post.coverImage}
						<img
							src={`/${post.coverImage}`}
							alt=""
							class="hidden h-28 w-36 flex-none rounded-xl object-cover sm:block"
						/>
					{/if}
				</a>
			{/each}
		</div>
	</section>
</div>
