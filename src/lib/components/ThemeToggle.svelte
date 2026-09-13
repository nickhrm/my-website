<script lang="ts">
	import Icon from '@iconify/svelte';
	import { iconData } from '$lib/icon-data';
	import { useTheme } from '$lib/stores/theme.svelte';

	const theme = useTheme();
</script>

<button
	type="button"
	onclick={theme.toggle}
	aria-label={theme.dark ? 'Zu hellem Design wechseln' : 'Zu dunklem Design wechseln'}
	class="grid h-9 w-9 flex-none place-items-center rounded-full text-ink-soft transition-colors hover:bg-paper-soft hover:text-ink"
>
	<Icon icon={iconData[theme.dark ? 'lucide:sun' : 'lucide:moon']} width={18} height={18} />
</button>
