<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	export let xdata: any;
	export let labels: any;

	let canvas: any;
	const data = {
		labels: labels,
		datasets: [
			{
				label: 'My First Dataset',
				data: xdata,
				backgroundColor: ['#7000e1', '#fc8800', '#00b0e8'],
				// hoverOffset: 4,
				borderWidth: 0
			}
		]
	};
	onMount(() => {
		const ctx = canvas.getContext('2d');
		// Initialize chart using default config set
		var chart = new Chart(ctx, {
			type: 'bar',
			data: data,
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: 'bottom',
						display: true,
						labels: {
							usePointStyle: true,
							padding: 20,
							font: {
								size: 14
							}
						}
					}
					
				}
			}
		});
	});
</script>

<canvas bind:this={canvas} />
