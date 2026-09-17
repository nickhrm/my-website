<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade, fly } from 'svelte/transition';
	import { iconData } from '$lib/icon-data';

	let { images, alt = '' }: { images: string[]; alt?: string } = $props();

	let index = $state(0);
	let direction = $state(1);
	let lightboxOpen = $state(false);

	let dragStartX = 0;
	let didSwipe = false;

	function goto(target: number, dir: number) {
		direction = dir;
		index = (target + images.length) % images.length;
	}

	function prev() {
		goto(index - 1, -1);
	}

	function next() {
		goto(index + 1, 1);
	}

	function openLightbox() {
		if (!didSwipe) lightboxOpen = true;
	}

	function closeLightbox() {
		lightboxOpen = false;
	}

	function onPointerDown(event: PointerEvent) {
		dragStartX = event.clientX;
		didSwipe = false;
	}

	function onPointerUp(event: PointerEvent) {
		const delta = event.clientX - dragStartX;
		if (Math.abs(delta) > 40) {
			didSwipe = true;
			if (delta < 0) next();
			else prev();
		}
	}

	function onKeydown(event: KeyboardEvent) {
		if (images.length < 2) return;
		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			prev();
		} else if (event.key === 'ArrowRight') {
			event.preventDefault();
			next();
		}
	}

	function onWindowKeydown(event: KeyboardEvent) {
		if (!lightboxOpen) return;
		if (event.key === 'Escape') closeLightbox();
		else if (event.key === 'ArrowLeft') prev();
		else if (event.key === 'ArrowRight') next();
	}

	// Preload neighbouring images so navigation feels instant.
	$effect(() => {
		if (images.length < 2) return;
		const preload = (src: string) => {
			const img = new Image();
			img.src = `/${src}`;
		};
		preload(images[(index + 1) % images.length]);
		preload(images[(index - 1 + images.length) % images.length]);
	});

	$effect(() => {
		if (!lightboxOpen) return;
		const original = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = original;
		};
	});
</script>

<svelte:window onkeydown={onWindowKeydown} />

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
	class="group relative rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-primary"
	role="group"
	aria-roledescription="Karussell"
	aria-label={alt}
	tabindex="0"
	onkeydown={onKeydown}
>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="relative h-[42vh] max-h-[26rem] min-h-[16rem] overflow-hidden rounded-2xl border border-line bg-paper-soft"
		style="touch-action: pan-y;"
		onpointerdown={onPointerDown}
		onpointerup={onPointerUp}
	>
		{#key index}
			<button
				type="button"
				class="absolute inset-0 grid cursor-zoom-in place-items-center"
				onclick={openLightbox}
				aria-label={`${alt || 'Bild'} vergrößern (${index + 1} von ${images.length})`}
				in:fly={{ x: direction * 48, duration: 220, opacity: 0 }}
				out:fly={{ x: -direction * 48, duration: 220, opacity: 0 }}
			>
				<img src={`/${images[index]}`} {alt} class="h-full w-full object-contain p-3" />
			</button>
		{/key}

		<div
			class="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-opacity group-hover:opacity-100"
		>
			<span
				class="grid h-10 w-10 place-items-center rounded-full bg-ink/50 text-paper backdrop-blur-sm"
			>
				<Icon icon={iconData['lucide:maximize-2']} width={16} height={16} />
			</span>
		</div>

		{#if images.length > 1}
			<span
				class="absolute top-3 right-3 rounded-full border border-line bg-paper/90 px-2.5 py-1 text-xs font-medium text-ink-soft"
			>
				{index + 1} / {images.length}
			</span>
		{/if}
	</div>

	{#if images.length > 1}
		<button
			type="button"
			onclick={prev}
			aria-label="Vorheriges Bild"
			class="absolute top-1/2 left-2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-line bg-paper/90 text-ink transition-colors hover:bg-paper"
		>
			<Icon icon={iconData['lucide:chevron-left']} width={18} height={18} />
		</button>
		<button
			type="button"
			onclick={next}
			aria-label="Nächstes Bild"
			class="absolute top-1/2 right-2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-line bg-paper/90 text-ink transition-colors hover:bg-paper"
		>
			<Icon icon={iconData['lucide:chevron-right']} width={18} height={18} />
		</button>
		<div class="mt-4 flex justify-center gap-2">
			{#each images as _, i (i)}
				<button
					type="button"
					aria-label={`Bild ${i + 1} anzeigen`}
					aria-current={i === index}
					onclick={() => goto(i, i > index ? 1 : -1)}
					class="h-1.5 rounded-full transition-all {i === index
						? 'w-6 bg-primary'
						: 'w-1.5 bg-line'}"
				></button>
			{/each}
		</div>
	{/if}
</div>

{#if lightboxOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
		onclick={(event) => {
			if (event.target === event.currentTarget) closeLightbox();
		}}
		role="dialog"
		aria-modal="true"
		aria-label={`${alt} – Bildergalerie`}
		tabindex="-1"
		transition:fade={{ duration: 150 }}
	>
		<button
			type="button"
			onclick={closeLightbox}
			aria-label="Schließen"
			class="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full border border-paper/20 bg-paper/10 text-paper transition-colors hover:bg-paper/20"
		>
			<Icon icon={iconData['lucide:x']} width={20} height={20} />
		</button>

		{#if images.length > 1}
			<button
				type="button"
				onclick={prev}
				aria-label="Vorheriges Bild"
				class="absolute top-1/2 left-2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-paper/20 bg-paper/10 text-paper transition-colors hover:bg-paper/20 sm:left-4"
			>
				<Icon icon={iconData['lucide:chevron-left']} width={22} height={22} />
			</button>
			<button
				type="button"
				onclick={next}
				aria-label="Nächstes Bild"
				class="absolute top-1/2 right-2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-paper/20 bg-paper/10 text-paper transition-colors hover:bg-paper/20 sm:right-4"
			>
				<Icon icon={iconData['lucide:chevron-right']} width={22} height={22} />
			</button>
		{/if}

		{#key index}
			<img
				src={`/${images[index]}`}
				{alt}
				class="max-h-[90vh] max-w-[90vw] object-contain"
				in:fade={{ duration: 150 }}
			/>
		{/key}

		{#if images.length > 1}
			<span
				class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-paper/20 bg-paper/10 px-3 py-1 text-xs font-medium text-paper"
			>
				{index + 1} / {images.length}
			</span>
		{/if}
	</div>
{/if}
