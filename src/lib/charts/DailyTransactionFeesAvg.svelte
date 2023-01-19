<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	export let ydata3: any;
	export let ydata4: any;
	export let xdata: any;


	let canvas: any;
	const data = {
		labels: xdata,
		datasets: [
			{
				data: ydata3,
				label: 'Avg Fees (NEAR)',
				borderColor: ['#FF7C43'],
				backgroundColor: ['#FF7C43'],
				pointStyle: false
			},
			{
				data: ydata4,
				label: 'Avg Fees (USD)',
				borderColor: ['#0e487d'],
				backgroundColor: ['#0e487d'],
				pointStyle: false,
				
			}
		]
	};
	onMount(() => {
		const ctx = canvas.getContext('2d');
		var chart = new Chart(ctx, {
			type: 'line',
			data: data,
			options: {
				maintainAspectRatio: false,
				scales: {
					x: {
						border: {
							display: true,
							color: 'black',
							width: 1
						},
						grid: {
							display: false
						},
						reverse: true
					},
					y: {
						title: {
							display: true,
							text: 'Fees',
							color: 'black',
							padding: 10
						},
						border: {
							display: true,
							color: 'black',
							width: 1
						}
					}
				},
				responsive: true,
				plugins: {
					legend: {
						display: true,
						position: 'right',
						align: 'start',
						labels: {
							usePointStyle: true,
							pointStyle: 'circle'
						}
					}
				}
			}
		});
	});
</script>

<canvas bind:this={canvas} />
