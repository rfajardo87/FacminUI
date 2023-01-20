<script lang="ts">
	import { clsx } from 'clsx';
	import { Size } from '../../shared/enums/gral';
	import type { Option } from '../../shared/structs/components/combo';
	export let options: Option[];
	export let size: Size = Size.default;
	export let select: boolean = false;
	export let all: boolean = false;
	export let selected = '';

	if (options.length) {
		if (all && !options.find((opt) => opt.value === -1)) {
			options.unshift({ text: 'Todos', value: -1 });
		}
		if (select && !options.find((opt) => opt.text === 'Selecionar')) {
			options.unshift({ text: 'Seleccionar' });
		}
	}
</script>

<select bind:value={selected} class={clsx('form-select', size && `form-select-${size}`)} on:change>
	{#each options as option}
		<option value={option.value ?? option.text}>{option.text}</option>
	{/each}
</select>
