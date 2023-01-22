<script lang="ts">
	import { clsx } from 'clsx';
	import Card from '../../../components/Card/Card.svelte';
	import Button from '../../../components/Button/Button.svelte';
	import Table from '../../../components/Table/Table.svelte';
	import Combo from '../../../components/Form/Combo.svelte';
	import Input from '../../../components/Form/Text.svelte';
	import Title from '../../../components/Page/Title.svelte';
	import { Size } from '../../../shared/enums/gral';
	import { ButtonType } from '../../../shared/enums/button';
	import { TooltipLocation } from '../../../shared/enums/tooltip';
	import type { PageData } from './$types';

	import { loadFacturas, facturasDisplay, reqFacturas } from './page';
	import type { Facturas } from 'src/shared/Models/Facturas';
	import { Notify, Loading } from 'notiflix';

	export let data: PageData;
	let value = '';
	let selected: string = '-1';
	let mes = data.month;
	let annum = data.year;

	let facturas: Facturas[] = data.facturas;

	const filtrarPeriodo = async () => {
		Loading.hourglass('Obteniendo facturas');
		try {
			const rspFacturas = await reqFacturas(annum, mes);
			facturas = rspFacturas.facturas;
			Notify.success('Facturas encontradas');
		} catch (error) {
			Notify.failure(`${error}`);
		} finally {
			Loading.remove();
		}
	};
</script>

<Title title="Facturas" />
<Card
	extraClass={{
		card: clsx('mb-2'),
		text: clsx('d-flex', 'flex-row', 'gap-2', 'flex-fill', 'justify-content-between')
	}}
>
	<div
		class={clsx(
			'flex-fill',
			'd-flex',
			'flex-row',
			'justify-content-start',
			'align-items-center',
			'gap-3'
		)}
	>
		<Combo bind:value={selected} options={data.status} all={true} size={Size.sm} id="Status" />
		<Input
			bind:value
			placeholder="Buscar"
			size={Size.sm}
			tooltip="Buscar por RFC, homoclave, UUID, serie, folio"
			tooltipPosition={TooltipLocation.bottom}
		/>
		<Combo
			bind:value={mes}
			options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => ({ text: `${n}` }))}
			all={true}
			size={Size.sm}
			id="Mes"
			on:change={() => filtrarPeriodo()}
		/>
		<Input
			bind:value={annum}
			placeholder="Año"
			size={Size.sm}
			tooltip="Buscar por año"
			tooltipPosition={TooltipLocation.bottom}
			on:input={() => filtrarPeriodo()}
		/>
		<Button
			icon={'upload'}
			size={Size.sm}
			tooltipText={'Cargar facturas'}
			tooltipPosition={TooltipLocation.bottom}
			extraClass="btn-load"
			on:click={loadFacturas}
		/>
		<Button
			icon="chart-column"
			type={ButtonType.success}
			size={Size.sm}
			tooltipText="Gráficas"
			tooltipPosition={TooltipLocation.bottom}
		/>
	</div>
	<div class="flex-fill">&nbsp;</div>
</Card>
<Card extraClass={{ card: clsx('w-100', 'mw-100') }}>
	<Table
		data={facturasDisplay(facturas, value, selected)}
		keys={['serie', 'folio', 'emisor', 'receptor', 'subTotal', 'iva', 'total']}
		headrz={['Serie', 'Folio', 'Emisor', 'Receptor', 'Subtotal', 'IVA', 'Total']}
	/>
</Card>

<style>
	@import './page.scss';
</style>
