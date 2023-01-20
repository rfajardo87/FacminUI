<script lang="ts">
	import Head from './Head.svelte';
	import { HeadrzType } from '../../shared/enums/table';
	export let data: any = [];
	export let headType: HeadrzType = HeadrzType.default;
	export let headrz: any = [];
	export let keys: string[] = [];

	const headrzList = () => {
		if (headrz.length) {
			return headrz;
		}
		switch (headType) {
			case HeadrzType.key:
				return Object.keys(data[0]);
			case HeadrzType.first:
				return data[0];
			default:
				return headrz;
		}
	};
</script>

<div class="overflow-auto mw-100 w-100">
	<table class="table table-striped table-hover table-sm tbl-area">
		<thead>
			<tr>
				{#each headrzList() as hd}
					<th>{hd}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#if data.length}
				{#each data as rw}
					<tr>
						{#each keys.length ? keys : Object.keys(rw) as k}
							<td>{@html rw[k]}</td>
						{/each}
					</tr>
				{/each}
			{:else}
				<slot />
			{/if}
		</tbody>
	</table>
</div>

<style>
	.tbl-area {
		overflow-y: scroll;
		width: 100%;
		max-width: 100%;
	}
</style>
