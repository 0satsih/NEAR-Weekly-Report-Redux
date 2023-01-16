<script lang="ts">
	import ChartHeader from './ChartHeader.svelte';

	export let className: string;
	export let title: string;
	export let query_link: string;
</script>

<div class={className}>
	<div class="border-2 border-gray-300 rounded-md p-2 bg-white">
		<ChartHeader {title} {query_link} />
		<div class="relative flex-auto">
			<slot name="figure"><span>Figure</span></slot>
		</div>
	</div>
</div>