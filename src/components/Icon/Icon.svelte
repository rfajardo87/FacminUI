<script lang="ts">
	import clsx from 'clsx';
	import { TooltipLocation } from '../../shared/enums/tooltip';
	import type { Colors, Semaphore } from '../../shared/enums/colors';
	export let icon: string = '';
	export let color: Colors | Semaphore | undefined = undefined;
	export let extraClass: string = '';
</script>

{#if icon}
	<i class={clsx('fa-solid', 'icon', color && `text-${color}`, `fa-${icon}`, extraClass)} />
{/if}

<style>
	.icon {
		margin: 0.3em;
	}
</style>
