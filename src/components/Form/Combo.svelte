<script lang="ts">
	import { clsx } from 'clsx';
	import { Size } from '../../shared/enums/gral';
	import type { Option } from '../../shared/structs/components/combo';
	export let options: Option[];
	export let size: Size = Size.default;
	export let seleccionar: boolean = false;
	export let all: boolean = false;
	export let value: string;
	export let id: string = '';

	if (options.length) {
		const todos = '-1';
		const textSelected = 'Seleccionar';
		if (all && !options.find((opt) => opt.value === todos)) {
			options.unshift({ text: 'Todos', value: todos });
			if (!value) {
				value = todos;
			}
		}
		if (seleccionar && !options.find((opt) => opt.text === textSelected)) {
			options.unshift({ text: textSelected });
			if (!value || value === todos) {
				value = textSelected;
			}
		}
	}
</script>

<select bind:value class={clsx('form-select', size && `form-select-${size}`)} on:change {id}>
	{#each options as option}
		<option value={option.value ?? option.text}>
			{option.text}
		</option>
	{/each}
</select>
