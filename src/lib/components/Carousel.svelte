<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
	import { iconData } from '$lib/icon-data';

	let { images, alt = '' }: { images: string[]; alt?: string } = $props();

	let index = $state(0);

	function prev() {
		index = (index - 1 + images.length) % images.length;
	}

	function next() {
		index = (index + 1) % images.length;
	}
</script>

<div class="relative">
	<div
		class="flex min-h-[16rem] items-center justify-center overflow-hidden rounded-2xl border border-line bg-paper-soft"
	>
		{#key index}
			<img
				src={`/${images[index]}`}
				{alt}
				in:fade={{ duration: 180 }}
				class="max-h-[70vh] w-auto object-contain"
			/>
		{/key}
	</div>

	{#if images.length > 1}
		<button
			type="button"
			onclick={prev}
			aria-label="Vorheriges Bild"
			class="absolute top-1/2 left-2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-line bg-paper/90 text-ink transition-colors hover:bg-paper"
		>
			<Icon icon={iconData["lucide:chevron-left"]} width={18} height={18} />
		</button>
		<button
			type="button"
			onclick={next}
			aria-label="Nächstes Bild"
			class="absolute top-1/2 right-2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-line bg-paper/90 text-ink transition-colors hover:bg-paper"
		>
			<Icon icon={iconData["lucide:chevron-right"]} width={18} height={18} />
		</button>
		<div class="mt-4 flex justify-center gap-2">
			{#each images as _, i (i)}
				<button
					type="button"
					aria-label={`Bild ${i + 1} anzeigen`}
					onclick={() => (index = i)}
					class="h-1.5 rounded-full transition-all {i === index
						? 'w-6 bg-primary'
						: 'w-1.5 bg-line'}"
				></button>
			{/each}
		</div>
	{/if}
</div>
