<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	export let ydata: any;
	export let xdata: any;


	let canvas: any;
	const data = {
		labels: xdata,
		datasets: [
			{
				data: ydata,
				label: '# of Users',
				backgroundColor: ['#003F5C'],
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
						reverse: true
					},
					y: {
						title: {
							display: true,
							text: 'Number of Users',
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
					},
					
				}
			}
		});
	});
</script>

<canvas bind:this={canvas} />
