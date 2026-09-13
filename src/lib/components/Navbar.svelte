<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header class="border-b border-line">
	<div class="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
		<a
			href="/"
			class="text-lg font-bold tracking-tight text-ink transition-colors hover:text-primary"
		>
			Nick Hermann
		</a>
		<ThemeToggle />
	</div>
</header>
