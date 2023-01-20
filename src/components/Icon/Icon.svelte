<script lang="ts">
	import clsx from 'clsx';
	import { TooltipLocation } from '../../shared/enums/tooltip';
	import { Colors, Semaphore } from '../../shared/enums/colors';
	export let icon: string = '';
	export let color: Colors | Semaphore = Colors.body;
</script>

{#if icon}
	<i class={clsx('fa-solid', 'icon', `text-${color}`, `fa-${icon}`)} />
{/if}

<style>
	.icon {
		margin: 0.3em;
	}
</style>
