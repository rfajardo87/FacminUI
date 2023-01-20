<script lang="ts">
	import Page from '../../components/Page/Page.svelte';
	import type { NavItem } from 'src/shared/structs/NavItem';
	import Menu from '../../components/Menu/Menu.svelte';
	import { Colors } from '../../shared/enums/colors';

	const navItems: NavItem[] = [
		{ link: '/main/clientes', icon: 'users', order: 3, title: 'Clientes / Proveedores' },
		{ link: '/main/facturas', icon: 'file-invoice-dollar', order: 1, title: 'Facturas' }
	]
		.sort((a: NavItem, b: NavItem) => (a.order && b.order ? a.order - b.order : -1))
		.map((item) => ({ ...item, color: Colors.light }));
</script>

<!-- <Page extraClass='mw-100 overflow-hidden'>
	<div class="mainPaneContent">
		<Menu {navItems} />
		<main>
			<slot />
		</main>
	</div>
</Page> -->
<slot />

<style>
	/* main {
		flex-grow: 1;
		max-width: 100%;
		width: 100%;
	}

	.mainPaneContent {
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: flex-start;
		height: 100%;
		width: 100%;
		padding: 0%;
	}

	.mainPaneContent > * {
		height: 100%;
	} */
</style>
