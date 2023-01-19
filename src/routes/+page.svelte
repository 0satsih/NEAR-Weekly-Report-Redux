<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';
	import Footer from '$lib/layout/Footer.svelte';
	import Header from '$lib/layout/Header.svelte';
	import Chart from '$lib/charts/layout/Chart.svelte';
	import DailyNewUsers from '$lib/charts/DailyNewUsers.svelte';
	import DailyActiveContracts from '$lib/charts/DailyActiveContracts.svelte';
	import DailyActiveUsers from '$lib/charts/DailyActiveUsers.svelte';
	import DailyNewContracts from '$lib/charts/DailyNewContracts.svelte';
	import DailyGas from '$lib/charts/DailyGas.svelte';
	import DailyTransactions from '$lib/charts/DailyTransactions.svelte';
	import DailyTransactionFeesTotal from '$lib/charts/DailyTransactionFeesTotal.svelte';
	import DailyTransactionFeesAvg from '$lib/charts/DailyTransactionFeesAvg.svelte';
	import { get_month_name } from '$lib/charts/data/date_processing';
	
	export let data: PageData;

	const dataObj = {
		daily_gas_7days: { xdata: [], ydata: [], ydata2: [] },
		daily_gas_30days: { xdata: [], ydata: [], ydata2: [] },
		daily_active_users_7days: { xdata: [], ydata: [] },
		daily_active_users_30days: { xdata: [], ydata: [] },
		daily_new_users_7days: { xdata: [], ydata: [] },
		daily_new_users_30days: { xdata: [], ydata: [] },
		daily_transactions_7days: { xdata: [], ydata: [] },
		daily_transactions_30days: { xdata: [], ydata: [] },
		daily_transaction_fee_7days: { xdata: [], ydata: [], ydata2: [], ydata3: [], ydata4: [] },
		daily_transaction_fee_30days: { xdata: [], ydata: [], ydata2: [], ydata3: [], ydata4: [] },
		daily_active_contracts_7days: { xdata: [], ydata: [], ydata2: [] },
		daily_active_contracts_30days: { xdata: [], ydata: [], ydata2: [] },
		daily_new_contracts_7days: { xdata: [], ydata: [] },
		daily_new_contracts_30days: { xdata: [], ydata: [] }
	};


	// daily_new_users_7days
	dataObj.daily_new_users_7days.xdata = data.daily_new_users_7days.map(function (e: any) {
		let month = get_month_name(e.first_time.substring(5, 7));
		let day = e.first_time.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_new_users_7days.ydata = data.daily_new_users_7days.map((e: any) => e.new_users);
	// daily_new_users_30days
	dataObj.daily_new_users_30days.xdata = data.daily_new_users_30days.map(function (e: any) {
		let month = get_month_name(e.first_time.substring(5, 7));
		let day = e.first_time.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_new_users_30days.ydata = data.daily_new_users_30days.map((e: any) => e.new_users);

	// daily_active_users_7days
	dataObj.daily_active_users_7days.xdata = data.daily_active_users_7days.map(function (e: any) {
		let month = get_month_name(e.date.substring(5, 7));
		let day = e.date.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_active_users_7days.ydata = data.daily_active_users_7days.map((e: any) => e.users);

	// daily_active_users_30days
	dataObj.daily_active_users_30days.xdata = data.daily_active_users_30days.map(function (e: any) {
		let month = get_month_name(e.date.substring(5, 7));
		let day = e.date.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_active_users_30days.ydata = data.daily_active_users_30days.map((e: any) => e.users);

	// daily_new_contracts_7days
	dataObj.daily_new_contracts_7days.xdata = data.daily_new_contracts_7days.map(function (e: any) {
		let month = get_month_name(e.date.substring(5, 7));
		let day = e.date.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_new_contracts_7days.ydata = data.daily_new_contracts_7days.map((e: any) => e.new_contracts);

	// daily_new_contracts_30days
	dataObj.daily_new_contracts_30days.xdata = data.daily_new_contracts_30days.map(function (e: any) {
		let month = get_month_name(e.date.substring(5, 7));
		let day = e.date.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_new_contracts_30days.ydata = data.daily_new_contracts_30days.map((e: any) => e.new_contracts);

	// daily_active_contracts_7days
	dataObj.daily_active_contracts_7days.xdata = data.daily_active_contracts_7days.map(function (e: any) {
			//e.filter((index: number) => index % 2 == 0);
			let month = get_month_name(e.date.substring(5, 7));
			let day = e.date.substring(8, 10);
			return month + ' ' + day;
	});
	dataObj.daily_active_contracts_7days.xdata = [...new Set(dataObj.daily_active_contracts_7days.xdata)];
	dataObj.daily_active_contracts_7days.ydata = data.daily_active_contracts_7days.map(function (e: any) {
		let contracts: number = 0;
		if (e.status == 'Successful Execution') {
			contracts = e.contracts;
		}
		return contracts;
	}); 
	dataObj.daily_active_contracts_7days.ydata2 = data.daily_active_contracts_7days.map(function (e: any) {
		let contracts: number = 0;
		if (e.status == 'Failed Execution') {
			contracts = e.contracts;
		}
		return contracts;
	}); 

	// daily_active_contracts_30days
	dataObj.daily_active_contracts_30days.xdata = data.daily_active_contracts_30days.map(function (e: any) {
			//e.filter((index: number) => index % 2 == 0);
			let month = get_month_name(e.date.substring(5, 7));
			let day = e.date.substring(8, 10);
			return month + ' ' + day;
	});
	dataObj.daily_active_contracts_30days.xdata = [...new Set(dataObj.daily_active_contracts_30days.xdata)];
	dataObj.daily_active_contracts_30days.ydata = data.daily_active_contracts_30days.map(function (e: any) {
		let contracts: number = 0;
		if (e.status == 'Successful Execution') {
			contracts = e.contracts;
		}
		return contracts;
	}); 
	dataObj.daily_active_contracts_30days.ydata2 = data.daily_active_contracts_30days.map(function (e: any) {
		let contracts: number = 0;
		if (e.status == 'Failed Execution') {
			contracts = e.contracts;
		}
		return contracts;
	}); 

	// daily_gas_7days
	dataObj.daily_gas_7days.xdata = data.daily_gas_7days.map(function (e: any) {
		let month = get_month_name(e.date.substring(5, 7));
		let day = e.date.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_gas_7days.ydata = data.daily_gas_7days.map((e: any) => e.total_gas_used_peta);
	//dataObj.daily_gas_7days.ydata2 = data.daily_gas_7days.map((e: any) => e.avg_gas_used_peta);

	// daily_gas_30days
	dataObj.daily_gas_30days.xdata = data.daily_gas_30days.map(function (e: any) {
		let month = get_month_name(e.date.substring(5, 7));
		let day = e.date.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_gas_30days.ydata = data.daily_gas_30days.map((e: any) => e.total_gas_used_peta);
	//dataObj.daily_gas_30days.ydata2 = data.daily_gas_30days.map((e: any) => e.avg_gas_used_peta);

	// daily_transactions_7days
	dataObj.daily_transactions_7days.xdata = data.daily_transactions_7days.map(function (e: any) {
		let month = get_month_name(e.date.substring(5, 7));
		let day = e.date.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_transactions_7days.ydata = data.daily_transactions_7days.map((e: any) => e.daily_transaction_count);

	// daily_transactions_30days
	dataObj.daily_transactions_30days.xdata = data.daily_transactions_30days.map(function (e: any) {
		let month = get_month_name(e.date.substring(5, 7));
		let day = e.date.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_transactions_30days.ydata = data.daily_transactions_30days.map((e: any) => e.daily_transaction_count);

	// daily_transactions_fees_7days
	dataObj.daily_transaction_fee_7days.xdata = data.daily_transaction_fee_7days.map(function (e: any) {
		let month = get_month_name(e.date.substring(5, 7));
		let day = e.date.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_transaction_fee_7days.ydata = data.daily_transaction_fee_7days.map((e: any) => e.total_tx_fees_near);
	dataObj.daily_transaction_fee_7days.ydata2 = data.daily_transaction_fee_7days.map((e: any) => e.total_tx_fees_usd);
	dataObj.daily_transaction_fee_7days.ydata3 = data.daily_transaction_fee_7days.map((e: any) => e.avg_tx_fees_near);
	dataObj.daily_transaction_fee_7days.ydata4 = data.daily_transaction_fee_7days.map((e: any) => e.avg_tx_fees_usd);

	// daily_transactions_fees_30days
	dataObj.daily_transaction_fee_30days.xdata = data.daily_transaction_fee_30days.map(function (e: any) {
		let month = get_month_name(e.date.substring(5, 7));
		let day = e.date.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_transaction_fee_30days.ydata = data.daily_transaction_fee_30days.map((e: any) => e.total_tx_fees_near);
	dataObj.daily_transaction_fee_30days.ydata2 = data.daily_transaction_fee_30days.map((e: any) => e.total_tx_fees_usd);
	dataObj.daily_transaction_fee_30days.ydata3 = data.daily_transaction_fee_30days.map((e: any) => e.avg_tx_fees_near);
	dataObj.daily_transaction_fee_30days.ydata4 = data.daily_transaction_fee_30days.map((e: any) => e.avg_tx_fees_usd);
	

	
	

</script>

<body class="bg-gray-100 h-screen">
	<header>
		<Header />
	</header>
	<main>
		<div class="static my-16 mx-6 2xl:mx-24 flex items-center justify-center">
			<div class="grid grid-cols-1 gap-2">
				<Chart
					className={'col-span-1'}
					title={'Daily New Users Past 7 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/84ac53b1-e761-4c35-a9aa-80cdfed24449'}
				>
					<div class="h-96" slot="figure">
						<DailyNewUsers
							xdata={dataObj.daily_new_users_7days.xdata}
							ydata={dataObj.daily_new_users_7days.ydata}
						/>
					</div>
				</Chart>
				<Chart
					className={'col-span-1'}
					title={'Daily New Users Past 30 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/45f1db19-3826-4b13-ab9d-e2ba7206bba3'}
				>
					<div class="h-96" slot="figure">
						<DailyNewUsers
							xdata={dataObj.daily_new_users_30days.xdata}
							ydata={dataObj.daily_new_users_30days.ydata}
						/>
					</div>
				</Chart>
				<Chart
					className={'col-span-1'}
					title={'Daily Active Users Past 7 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/035e0e9f-2751-4df6-95ed-2b6c1840210f'}
				>
					<div class="h-96" slot="figure">
						<DailyActiveUsers
							xdata={dataObj.daily_active_users_7days.xdata}
							ydata={dataObj.daily_active_users_7days.ydata}
						/>
					</div>
				</Chart>
				<Chart
					className={'col-span-1'}
					title={'Daily Active Users Past 30 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/ac844938-faa5-44f6-a412-4a8309253f44'}
				>
					<div class="h-96" slot="figure">
						<DailyActiveUsers
							xdata={dataObj.daily_active_users_30days.xdata}
							ydata={dataObj.daily_active_users_30days.ydata}
						/>
					</div>
				</Chart>
				<Chart
					className={'col-span-1'}
					title={'Daily New Contracts Past 7 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/a999b8d2-0c84-4869-9a8c-83c47c15c232'}
				>
					<div class="h-96" slot="figure">
						<DailyNewContracts
							xdata={dataObj.daily_new_contracts_7days.xdata}
							ydata={dataObj.daily_new_contracts_7days.ydata}
						/>
					</div>
				</Chart>
				<Chart
					className={'col-span-1'}
					title={'Daily New Contracts Past 30 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/49b4fe73-62c2-45b1-8f3b-74ede4d032a1'}
				>
					<div class="h-96" slot="figure">
						<DailyNewContracts
							xdata={dataObj.daily_new_contracts_30days.xdata}
							ydata={dataObj.daily_new_contracts_30days.ydata}
						/>
					</div>
				</Chart>
				<Chart
					className={'col-span-1'}
					title={'Daily Active Contracts past 7 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/facfb7c4-beac-4c53-85a1-cc4bcad0873b'}
				>
					<div class="h-96" slot="figure">
						<DailyActiveContracts
							xdata={dataObj.daily_active_contracts_7days.xdata}
							ydata={dataObj.daily_active_contracts_7days.ydata.filter(n => n)}
							ydata2={dataObj.daily_active_contracts_7days.ydata2.filter(n => n)}
						/>
					</div>
				</Chart>
				<Chart
					className={'col-span-1'}
					title={'Daily Active Contracts past 30 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/227cc041-caf9-4afc-af5e-b71cb9de25bb'}
				>
					<div class="h-96" slot="figure">
						<DailyActiveContracts
							xdata={dataObj.daily_active_contracts_30days.xdata}
							ydata={dataObj.daily_active_contracts_30days.ydata.filter(n => n)}
							ydata2={dataObj.daily_active_contracts_30days.ydata2.filter(n => n)}
						/>
					</div>
				</Chart>
				<Chart
					className={'col-span-1'}
					title={'Daily Gas Used Past 7 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/69b52d8a-5640-4e5b-9459-34fdd4693348'}
				>
					<div class="h-96" slot="figure">
						<DailyGas
							xdata={dataObj.daily_gas_7days.xdata}
							ydata={dataObj.daily_gas_7days.ydata.filter(n => n)}
						/>
					</div>
				</Chart>
				<Chart
					className={'col-span-1'}
					title={'Daily Gas Used Past 30 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/2727637e-a42e-487b-9f68-c5c2a8c724ca'}
				>
					<div class="h-96" slot="figure">
						<DailyGas
							xdata={dataObj.daily_gas_30days.xdata}
							ydata={dataObj.daily_gas_30days.ydata.filter(n => n)}
						/>
					</div>
				</Chart>
				<Chart
					className={'col-span-1'}
					title={'Daily Transactions Past 7 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/c26914bd-4a9c-4adb-bcf3-642fdc85cb1e/visualizations/64426bcb-e22b-46eb-8621-f7faab39d929'}
				>
					<div class="h-96" slot="figure">
						<DailyTransactions
							xdata={dataObj.daily_transactions_7days.xdata}
							ydata={dataObj.daily_transactions_7days.ydata.filter(n => n)}
						/>
					</div>
				</Chart>
				<Chart
					className={'col-span-1'}
					title={'Daily Transactions Past 30 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/f076a63d-c77f-4fce-b3ff-73f903cc36b7'}
				>
					<div class="h-96" slot="figure">
						<DailyTransactions
							xdata={dataObj.daily_transactions_30days.xdata}
							ydata={dataObj.daily_transactions_30days.ydata.filter(n => n)}
						/>
					</div>
				</Chart>
				<Chart
					className={'col-span-1'}
					title={'Daily Sum of Transaction Fees Past 7 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/f076a63d-c77f-4fce-b3ff-73f903cc36b7'}
				>
					<div class="h-96" slot="figure">
						<DailyTransactionFeesTotal
							xdata={dataObj.daily_transaction_fee_7days.xdata}
							ydata={dataObj.daily_transaction_fee_7days.ydata.filter(n => n)}
							ydata2={dataObj.daily_transaction_fee_7days.ydata2.filter(n => n)}
						/>
					</div>
				</Chart>
				<Chart
					className={'col-span-1'}
					title={'Daily Sum of Transaction Fees past 30 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/7029bdcf-0bfc-4e93-9b84-68fb0229a64e'}
				>
					<div class="h-96" slot="figure">
						<DailyTransactionFeesTotal
							xdata={dataObj.daily_transaction_fee_30days.xdata}
							ydata={dataObj.daily_transaction_fee_30days.ydata.filter(n => n)}
							ydata2={dataObj.daily_transaction_fee_30days.ydata2.filter(n => n)}
						/>
					</div>
				</Chart>
				<Chart
					className={'col-span-1'}
					title={'Daily Average of Transaction Fees past 7 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/f076a63d-c77f-4fce-b3ff-73f903cc36b7'}
				>
					<div class="h-96" slot="figure">
						<DailyTransactionFeesAvg
							xdata={dataObj.daily_transaction_fee_7days.xdata}
							ydata3={dataObj.daily_transaction_fee_7days.ydata3.filter(n => n)}
							ydata4={dataObj.daily_transaction_fee_7days.ydata4.filter(n => n)}
						/>
					</div>
				</Chart>
				<Chart
					className={'col-span-1'}
					title={'Daily Average of Transaction Fees past 30 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/7029bdcf-0bfc-4e93-9b84-68fb0229a64e'}
				>
					<div class="h-96" slot="figure">
						<DailyTransactionFeesAvg
							xdata={dataObj.daily_transaction_fee_30days.xdata}
							ydata3={dataObj.daily_transaction_fee_30days.ydata3.filter(n => n)}
							ydata4={dataObj.daily_transaction_fee_30days.ydata4.filter(n => n)}
						/>
					</div>
				</Chart>
				
				
			</div>
		</div>
	</main>
	<footer>
		<Footer />
	</footer>
</body>
