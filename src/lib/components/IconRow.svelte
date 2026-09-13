<script lang="ts">
	import Icon from '@iconify/svelte';
	import { iconData } from '$lib/icon-data';

	let { icons }: { icons: string[] } = $props();
</script>

<div class="flex flex-wrap items-center gap-3">
	{#each icons as icon (icon)}
		<Icon icon={iconData[icon] ?? icon} width={22} height={22} />
	{/each}
</div>
