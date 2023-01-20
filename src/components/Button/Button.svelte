<script lang="ts">
	import { clsx } from 'clsx';
	import type { Colors } from '../../shared/enums/colors';
	import Icon from '../../components/Icon/Icon.svelte';
	import { ButtonType } from '../../shared/enums/button';
	import { Size } from '../../shared/enums/gral';
	import { TooltipLocation } from '../../shared/enums/tooltip';
	import { contrastTextColor } from '../../shared/fns/constrast';
	import { typeColors } from '../../shared/fns/typecolors';

	export let text: string = '';
	export let icon: string = '';
	export let type: ButtonType = ButtonType.primary;
	export let size: Size = Size.default;
	export let colorIcon: Colors | undefined = undefined;
	export let tooltipText: string | undefined = undefined;
	export let tooltipPosition: TooltipLocation = TooltipLocation.default;
	export let extraClass: string | any | undefined = undefined;
</script>

<button
	class={clsx('btn', `btn-${type}`, size && `btn-${size}`, extraClass)}
	on:click
	data-tooltip={tooltipText}
	data-tooltip-location={tooltipPosition}
>
	{#if icon}
		<Icon {icon} color={contrastTextColor(typeColors(type), colorIcon)} />
	{/if}
	{text}</button
>
