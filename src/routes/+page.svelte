<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';
	import SwapDistributions from '$lib/charts/SwapDistributions.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import Header from '$lib/layout/Header.svelte';
	import Chart from '$lib/charts/layout/Chart.svelte';
	export let data: PageData;
</script>

<body class="bg-gray-100 h-screen">
	<header>
		<Header />
	</header>
	<main>
		<div class="static my-16 mx-6 2xl:mx-24 flex items-center justify-center">
			<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
				
			</div>
		</div>
	</main>
	<footer>
		<Footer />
	</footer>
</body>
