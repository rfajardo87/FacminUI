<script lang="ts">
	import { clsx } from 'clsx';
	import type { extraClassCard } from '../../shared/structs/components/card';
	import Title from '../../components/Page/Title.svelte';
	export let title: string = '';
	export let extraClass: extraClassCard = {
		text: clsx('flex-column', 'justify-content-start', 'align-itmes-start')
	};
</script>

<div class={clsx('card', extraClass.card)}>
	<div class={clsx('card-body', extraClass.body)}>
		{#if title}
			<Title {title} extraClass={extraClass.title} />
		{/if}
		<div class={clsx('card-text', 'd-flex', extraClass.text)}>
			<slot />
		</div>
	</div>
</div>
