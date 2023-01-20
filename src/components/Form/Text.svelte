<script lang="ts">
	import { clsx } from 'clsx';
	import { InputType } from '../../shared/enums/input';
	import { Size } from '../../shared/enums/gral';
	import { TooltipLocation } from '../../shared/enums/tooltip';

	// export let type: InputType = InputType.default;
	export let size: Size = Size.default;
	export let placeholder: string = '';
	export let readonly: boolean = false;
	export let disabled: boolean = false;
	export let value: any;
	export let tooltip: string | undefined = undefined;
	export let tooltipPosition: TooltipLocation = TooltipLocation.default;
</script>

<input
	class={clsx('form-control', size && `form-control-${size}`)}
	{placeholder}
	{readonly}
	{disabled}
	bind:value
	type="text"
	data-tooltip={tooltip}
	data-tooltip-location={tooltipPosition}
	title={tooltip}
	on:input
/>
