<script lang="ts">
	import { clsx } from 'clsx';
	export let title: string = '';
	export let extraClass: string = '';
</script>

{#if title}
	<h3 class={clsx('title', 'card-title', extraClass)}>{title}</h3>
{/if}

<style>
	.title {
		color: #057dcd;
		font-size: xx-large;
		margin: 15px;
	}
</style>
