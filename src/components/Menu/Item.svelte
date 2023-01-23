<script lang="ts">
	import clsx from 'clsx';
	import Icon from '../Icon/Icon.svelte';
	import type { NavItem } from '../../shared/structs/NavItem';

	export let item: NavItem;
</script>

<a
	href={item.link}
	class={clsx('menuItem', 'm-2', `text-${item.color}`)}
	data-tooltip={item.title}
	data-tooltip-location="right"
>
	<Icon icon={item.icon} color={item.color} />
	{#if item.text}
		{item.text}
	{/if}
</a>

<style>
	.menuItem {
		text-decoration: none;
	}
</style>
