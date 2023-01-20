<script lang="ts">
	import { clsx } from 'clsx';
	import Title from './Title.svelte';
	export let title: string = '';
	export let extraClass: string = '';
</script>

<div class={clsx('card', extraClass, 'border-light')}>
	<div class="card-body">
		{#if title}
			<Title {title} />
		{/if}
		<slot />
	</div>
</div>

<style>
	.card {
		margin: 2em;
		height: calc(100vh - 4em);
	}

	.card-body {
		padding: 0%;
		/* height: calc(100% - 64px); */
	}
</style>
