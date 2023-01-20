<script lang="ts">
	export let text: any | undefined = undefined;
</script>

<th>
	{#if text}
		{text}
	{:else}
		<slot />
	{/if}
</th>
