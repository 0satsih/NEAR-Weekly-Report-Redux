<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	export let ydata: any;
	export let ydata2: any;
	export let xdata: any;


	let canvas: any;
	const data = {
		labels: xdata,
		datasets: [
			{
				label: 'Successful Execution',
				data: ydata,
				backgroundColor: ['#A05195'],
				borderRadius: 5
				
			},
			{
				label: 'Failed Execution',
				data: ydata2,	
				backgroundColor: ['#FFA600'],
				borderRadius: 5
			}
		]
	};
	onMount(() => {
		const ctx = canvas.getContext('2d');
		var chart = new Chart(ctx, {
			type: 'bar',
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
						stacked: true,
						reverse: true
					},
					y: {
						title: {
							display: true,
							text: 'Number of Contracts',
							color: 'black',
							padding: 10
						},
						border: {
							display: true,
							color: 'black',
							width: 1
						},
						stacked: true,
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
