<script lang="ts">
	import { clsx } from 'clsx';
	import Card from '../../../components/Card/Card.svelte';
	import Button from '../../../components/Button/Button.svelte';
	import Table from '../../../components/Table/Table.svelte';
	import Combo from '../../../components/Form/Combo.svelte';
	import Input from '../../../components/Form/Text.svelte';
	import Title from '../../../components/Page/Title.svelte';
	import { Size } from '../../../shared/enums/gral';
	import { HeadrzType } from '../../../shared/enums/table';
	import { ButtonType } from '../../../shared/enums/button';
	import type { Facturas } from '../../../shared/Models/Facturas';
	import { TooltipLocation } from '../../../shared/enums/tooltip';
	import type { PageData } from './$types';

	import { loadFacturas, facturasDisplay } from './page';
	export let data: PageData;
	let value = '';
	let selected: string = '-1';
</script>

<Title title="Facturas" />
<!-- <Card title="Facturas" extraClass={{text:clsx('d-flex','flex-column','gap-2'), card:clsx('h-100','mh-100','w-100','mw-100','overflow-hidden'), body:clsx('mw-100','w-100','overflow-hidden')}} > -->
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
		<Combo bind:selected options={data.status} all={true} size={Size.sm} />
		<Input
			bind:value
			placeholder="Buscar"
			size={Size.sm}
			tooltip="Buscar por RFC, homoclave, UUID, serie, folio"
			tooltipPosition={TooltipLocation.bottom}
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
		data={facturasDisplay(data.facturas, value, selected)}
		keys={['serie', 'folio', 'emisor', 'receptor', 'subTotal', 'iva', 'total']}
		headrz={['Serie', 'Folio', 'Emisor', 'Receptor', 'Subtotal', 'IVA', 'Total']}
	/>
</Card>

<!-- </Card> -->
<style>
	@import './page.scss';
</style>
