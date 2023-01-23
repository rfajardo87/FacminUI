<script lang="ts">
	import { clsx } from 'clsx';
	import Card from '../../../components/Card/Card.svelte';
	import Table from '../../../components/Table/Table.svelte';
	import Input from '../../../components/Form/Text.svelte';
	import Icon from '../../../components/Icon/Icon.svelte';
	import Title from '../../../components/Page/Title.svelte';
	import { keyColor } from '../../../shared/fns/typecolors';
	import { Colors } from '../../../shared/enums/colors';
	import type { Persona } from '../../../shared/Models/Persona';

	import type { PageData } from './$types';

	export let data: PageData;
	let value: string = '';

	const rows: Persona[] = data.personas;
	const tipoCliente = (persona: Persona, vTrue: any, vFalse: any) => {
		return persona['tipo'] === 'M' ? vTrue : vFalse;
	};

	const contiene = (val: string, ref: string) => {
		return new RegExp(ref, 'ig').test(val);
	};

	const filterPersona = (): Persona[] =>
		rows.filter((p: Persona) => contiene(p.id, value) || contiene(p.nombre, value));

	const displayValue = (row: any, cols: string[] = []) => {
		let vals = Object.entries(row);
		if (cols.length) {
			vals = vals.filter((c) => cols.includes(c[0]));
		}
		return vals.map((v) => v[1]);
	};
</script>

<Title title="Clientes / Proveedores" />
<Card
	extraClass={{
		card: clsx('w-100'),
		body: clsx('d-flex', 'flex-row', 'justify-content-start', 'align-items-start')
	}}
>
	<Input bind:value placeholder="Buscar" tooltip="Buscar RFC, Nombre" />
</Card>
<Card extraClass={{ card: clsx('my-2', 'w-100', 'h-100', 'overflow-auto') }}>
	<Table headrz={['Status', 'Tipo', 'RFC', 'Nombre']}>
		{#each !value ? rows : filterPersona() as rw}
			<tr>
				<td><Icon icon="circle" color={keyColor(rw['statusID'])} /></td>
				<td>
					<Icon
						icon={tipoCliente(rw, 'people-group', 'user')}
						color={tipoCliente(rw, Colors.primary, Colors.secondary)}
					/>
					{rw['tipoDescripcion']}
				</td>
				{#each displayValue(rw, ['id', 'nombre']) as k}
					<td>{k}</td>
				{/each}
			</tr>
		{/each}
	</Table>
</Card>
