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
	import { Tabs, TabItem } from 'flowbite-svelte';

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
	dataObj.daily_new_contracts_7days.ydata = data.daily_new_contracts_7days.map(
		(e: any) => e.new_contracts
	);

	// daily_new_contracts_30days
	dataObj.daily_new_contracts_30days.xdata = data.daily_new_contracts_30days.map(function (e: any) {
		let month = get_month_name(e.date.substring(5, 7));
		let day = e.date.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_new_contracts_30days.ydata = data.daily_new_contracts_30days.map(
		(e: any) => e.new_contracts
	);

	// daily_active_contracts_7days
	dataObj.daily_active_contracts_7days.xdata = data.daily_active_contracts_7days.map(function (
		e: any
	) {
		//e.filter((index: number) => index % 2 == 0);
		let month = get_month_name(e.date.substring(5, 7));
		let day = e.date.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_active_contracts_7days.xdata = [
		...new Set(dataObj.daily_active_contracts_7days.xdata)
	];
	dataObj.daily_active_contracts_7days.ydata = data.daily_active_contracts_7days.map(function (
		e: any
	) {
		let contracts: number = 0;
		if (e.status == 'Successful Execution') {
			contracts = e.contracts;
		}
		return contracts;
	});
	dataObj.daily_active_contracts_7days.ydata2 = data.daily_active_contracts_7days.map(function (
		e: any
	) {
		let contracts: number = 0;
		if (e.status == 'Failed Execution') {
			contracts = e.contracts;
		}
		return contracts;
	});

	// daily_active_contracts_30days
	dataObj.daily_active_contracts_30days.xdata = data.daily_active_contracts_30days.map(function (
		e: any
	) {
		//e.filter((index: number) => index % 2 == 0);
		let month = get_month_name(e.date.substring(5, 7));
		let day = e.date.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_active_contracts_30days.xdata = [
		...new Set(dataObj.daily_active_contracts_30days.xdata)
	];
	dataObj.daily_active_contracts_30days.ydata = data.daily_active_contracts_30days.map(function (
		e: any
	) {
		let contracts: number = 0;
		if (e.status == 'Successful Execution') {
			contracts = e.contracts;
		}
		return contracts;
	});
	dataObj.daily_active_contracts_30days.ydata2 = data.daily_active_contracts_30days.map(function (
		e: any
	) {
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
	dataObj.daily_transactions_7days.ydata = data.daily_transactions_7days.map(
		(e: any) => e.daily_transaction_count
	);

	// daily_transactions_30days
	dataObj.daily_transactions_30days.xdata = data.daily_transactions_30days.map(function (e: any) {
		let month = get_month_name(e.date.substring(5, 7));
		let day = e.date.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_transactions_30days.ydata = data.daily_transactions_30days.map(
		(e: any) => e.daily_transaction_count
	);

	// daily_transactions_fees_7days
	dataObj.daily_transaction_fee_7days.xdata = data.daily_transaction_fee_7days.map(function (
		e: any
	) {
		let month = get_month_name(e.date.substring(5, 7));
		let day = e.date.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_transaction_fee_7days.ydata = data.daily_transaction_fee_7days.map(
		(e: any) => e.total_tx_fees_near
	);
	dataObj.daily_transaction_fee_7days.ydata2 = data.daily_transaction_fee_7days.map(
		(e: any) => e.total_tx_fees_usd
	);
	dataObj.daily_transaction_fee_7days.ydata3 = data.daily_transaction_fee_7days.map(
		(e: any) => e.avg_tx_fees_near
	);
	dataObj.daily_transaction_fee_7days.ydata4 = data.daily_transaction_fee_7days.map(
		(e: any) => e.avg_tx_fees_usd
	);

	// daily_transactions_fees_30days
	dataObj.daily_transaction_fee_30days.xdata = data.daily_transaction_fee_30days.map(function (
		e: any
	) {
		let month = get_month_name(e.date.substring(5, 7));
		let day = e.date.substring(8, 10);
		return month + ' ' + day;
	});
	dataObj.daily_transaction_fee_30days.ydata = data.daily_transaction_fee_30days.map(
		(e: any) => e.total_tx_fees_near
	);
	dataObj.daily_transaction_fee_30days.ydata2 = data.daily_transaction_fee_30days.map(
		(e: any) => e.total_tx_fees_usd
	);
	dataObj.daily_transaction_fee_30days.ydata3 = data.daily_transaction_fee_30days.map(
		(e: any) => e.avg_tx_fees_near
	);
	dataObj.daily_transaction_fee_30days.ydata4 = data.daily_transaction_fee_30days.map(
		(e: any) => e.avg_tx_fees_usd
	);
</script>

<body class="bg-gray-100 h-screen">
	<header>
		<Header />
	</header>
	<main>
		<div class="static my-8 mx-6 2xl:mx-96  items-center justify-center">
			<Tabs style="underline">
				<TabItem open title="Summary">
					<p class="text-md text-white">
						The purpose of this analysis is to improve upon the existing <a
							href="https://near.org/blog/near-weekly-on-chain-data-report-december-23/"
						>
							Weekly NEAR Transparency Report</a
						>, where each week, the NEAR Foundation publishes data to help the NEAR community
						understand the ecosystem's health by showcasing a collection of key metrics. This
						analysis examines the report in terms of three different elements; user interface/user
						experience, quality of data visualisation of charts, and the language used to aid the
						charts. In the corresponsing tabs, you can find a critical analysis on each of these
						elements.
						<br />
						Improving upon the report with these criticisms in mind, I have provided a new report, containing
						the most relevant metrics displayed with interactive real-time charts using data from FlipsideCrypto,
						along with explanations as to why these metrics were chosen and how the UI/UX of the report
						has been improved, and ultimately better facilitating the readers to get the best possible
						snapshot of NEAR, it's users, and it's ecosystem.
					</p>
				</TabItem>
				<TabItem title="UI/UX">
					<b class="text-md text-white">Positives</b>
					<ul>
						<li class="text-md text-white">Clear report look and feel</li>
						<li class="text-md text-white">Good flow with clear identifiable sections</li>
					</ul>
					<b class="text-md text-white">Negatives</b>
					<ul>
						<li class="text-md text-white">
							Enourmous image at the top of the report, confuses reader as to what they just
							navigated to.
						</li>
						<li class="text-md text-white">
							Charts are almost unreadable at standard zoom, just static image with no
							interactivity.
						</li>
					</ul>
				</TabItem>
				<TabItem title="Charts/Metrics">
					<b class="text-md text-white">Positives</b>
					<ul>
						<li class="text-md text-white">Good choice of key metrics, relevant for a weekly report</li>
					</ul>
					<b class="text-md text-white">Negatives</b>
					<ul>
						<li class="text-md text-white">
							Although good choice of metrics, they are not aided with any context, how does this
							compare to previous weeks?
						</li>
						<li class="text-md text-white">
							Again, charts are almost unreadable as all the text is too small and there could be a
							better choice in the type of visualisations.
						</li>
					</ul>
				</TabItem>
				<TabItem title="Language">
					<p class="text-md text-white">
						Overall, the language aiding the charts is clear and descriptive. The only criticism is
						that they included language describing data that is not displayed in a chart, which can
						be confusing.
					</p>
				</TabItem>
				<TabItem title="Improvements">
					<b class="text-md text-white">UI/UX</b>
					<p class="text-md text-white">The improved report displayed below includes:</p>
					<ul>
						<li class="text-md text-white">More legible charts</li>
						<li class="text-md text-white">Interactivity</li>
						<li class="text-md text-white">Links to queries that generated the charts</li>
					</ul>
					<p class="text-md text-white">
						This gives the reader a smoother more informed experience with clear, interactive
						charts, and if they wish to do so, they can check the query used for themselves.
					</p>
					<br />
					<b class="text-md text-white">Charts/Metrics</b>
					<p class="text-md text-white">The improved report adds upon the exisiting by containing the following metrics:</p>
					<ul class="text-md text-white">
						<li>Daily New Users Past 7 Days</li>
						<li>Daily New Users Past 30 Days</li>
						<li>Daily Active Users Past 7 Days</li>
						<li>Daily Active Users Past 30 Days</li>
						<li>Daily New Contracts Past 7 Days</li>
						<li>Daily New Contracts Past 30 Days</li>
						<li>Daily Active Contracts past 7 Days</li>
						<li>Daily Active Contracts past 30 Days</li>
						<li>Daily Gas Used Past 7 Days</li>
						<li>Daily Gas Used Past 30 Days</li>
						<li>Daily Transactions Past 7 Days</li>
						<li>Daily Transactions Past 30 Days</li>
						<li>Daily Sum of Transaction Fees Past 7 Days</li>
						<li>Daily Sum of Transaction Fees Past 30 Days</li>
						<li>Daily Average of Transaction Fees past 7 Days</li>
						<li>Daily Average of Transaction Fees past 30 Days</li>
						<p>
							<br />
							These metrics were chosen as they are the most relevant to include in a report with a period
							of only a week. Users who either hold, conduct transactions, or interact with smart contracts
							on the NEAR platform will want to be informed of the recent user activity, as well as the
							recent costs of interacting with the platform.
							<br /><br />
							This collection of metrics improves upon the existing report by complementing the weekly
							metrics with the same metrics, but with more history of 30 days. This gives vital context
							to the metric and gives the reader the ability to compare the most recent week's results
							with the past month.
							<br /><br />
							Additional metrics included are the categorisation of active contracts into successful
							execution and failed execution. This gives transparency into the platform as contract execution
							is often not guaranteed.
							<br /><br />
							An additonal category has been included in the transaction fee metrics, displaying fees
							in terms of both NEAR and USD, which is beneficial for the user as chances are they are
							still accounting in terms of dollars in their head. An additional metric of daily average
							fees has also been included.
						</p>
					</ul></TabItem
				>
			</Tabs>
		</div>
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
				<div class="ml-8 my-2 max-w-3xl">
					<p>
						Over the past week, the platform saw a sharp rise in the number of new users (accounts)
						peaking at over 35,000 new users in a day on Jan 13th, followed by a steady decline.
					</p>
				</div>
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
				<div class="ml-8 my-2 max-w-3xl">
					<p>
						Comparing the recent week to the past month, the recent week has seen substantially more
						new users, some days seeing 2-3x more new users the days in the previous weeks.
					</p>
				</div>
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
				<div class="ml-8 my-2 max-w-3xl">
					<p>
						The number of daily active users over the past 7 days has been in steady decline, down
						from a peak on Jan 13th just shy of 150,000 active users.
					</p>
				</div>
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
				<div class="ml-8 my-2 max-w-3xl">
					<p>
						In comparison with the previous weeks, the most recent week has seen a substantial
						increase in active users on the platform, from hovering around 40,000 to surging over
						100,000 daily active users.
					</p>
				</div>
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
				<div class="ml-8 my-2 max-w-3xl">
					<p>
						The number of new contracts created on the platform has been around 6 in the recent
						week.
					</p>
				</div>
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
				<div class="ml-8 my-2 max-w-3xl">
					<p>
						The recents weeks daily new contracts has increased from the previous couple of weeks,
						but nothing substantial.
					</p>
				</div>
				<Chart
					className={'col-span-1'}
					title={'Daily Active Contracts past 7 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/facfb7c4-beac-4c53-85a1-cc4bcad0873b'}
				>
					<div class="h-96" slot="figure">
						<DailyActiveContracts
							xdata={dataObj.daily_active_contracts_7days.xdata}
							ydata={dataObj.daily_active_contracts_7days.ydata.filter((n) => n)}
							ydata2={dataObj.daily_active_contracts_7days.ydata2.filter((n) => n)}
						/>
					</div>
				</Chart>
				<div class="ml-8 my-2 max-w-3xl">
					<p>
						The number of daily active contracts has been steady, with consistent successful
						execution rates of around 2/3.
					</p>
				</div>
				<Chart
					className={'col-span-1'}
					title={'Daily Active Contracts past 30 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/227cc041-caf9-4afc-af5e-b71cb9de25bb'}
				>
					<div class="h-96" slot="figure">
						<DailyActiveContracts
							xdata={dataObj.daily_active_contracts_30days.xdata}
							ydata={dataObj.daily_active_contracts_30days.ydata.filter((n) => n)}
							ydata2={dataObj.daily_active_contracts_30days.ydata2.filter((n) => n)}
						/>
					</div>
				</Chart>
				<div class="ml-8 my-2 max-w-3xl">
					<p>
						In comparison to the previous month, the recent week has seen slight more active
						contracts.
					</p>
				</div>
				<Chart
					className={'col-span-1'}
					title={'Daily Gas Used Past 7 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/69b52d8a-5640-4e5b-9459-34fdd4693348'}
				>
					<div class="h-96" slot="figure">
						<DailyGas
							xdata={dataObj.daily_gas_7days.xdata}
							ydata={dataObj.daily_gas_7days.ydata.filter((n) => n)}
						/>
					</div>
				</Chart>
				<div class="ml-8 my-2 max-w-3xl">
					<p>
						The past week of daily gas used, measured in peta gas, has been steady around 7 peta
						gas.
					</p>
				</div>
				<Chart
					className={'col-span-1'}
					title={'Daily Gas Used Past 30 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/2727637e-a42e-487b-9f68-c5c2a8c724ca'}
				>
					<div class="h-96" slot="figure">
						<DailyGas
							xdata={dataObj.daily_gas_30days.xdata}
							ydata={dataObj.daily_gas_30days.ydata.filter((n) => n)}
						/>
					</div>
				</Chart>
				<div class="ml-8 my-2 max-w-3xl">
					<p>
						In comparison to the previous month, daily gas used has seen a slight increase of the
						recent week.
					</p>
				</div>
				<Chart
					className={'col-span-1'}
					title={'Daily Transactions Past 7 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/c26914bd-4a9c-4adb-bcf3-642fdc85cb1e/visualizations/64426bcb-e22b-46eb-8621-f7faab39d929'}
				>
					<div class="h-96" slot="figure">
						<DailyTransactions
							xdata={dataObj.daily_transactions_7days.xdata}
							ydata={dataObj.daily_transactions_7days.ydata.filter((n) => n)}
						/>
					</div>
				</Chart>
				<div class="ml-8 my-2 max-w-3xl">
					<p>
						The number of transaction conducted over the recent week started strong and has
						decreased slightly over time.
					</p>
				</div>
				<Chart
					className={'col-span-1'}
					title={'Daily Transactions Past 30 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/f076a63d-c77f-4fce-b3ff-73f903cc36b7'}
				>
					<div class="h-96" slot="figure">
						<DailyTransactions
							xdata={dataObj.daily_transactions_30days.xdata}
							ydata={dataObj.daily_transactions_30days.ydata.filter((n) => n)}
						/>
					</div>
				</Chart>
				<div class="ml-8 my-2 max-w-3xl">
					<p>
						The recent weeks activity of daily transactions is quite higher than the previous weeks,
						hovering around 300,000 transactions a day to 500,000 transactions a day.
					</p>
				</div>
				<Chart
					className={'col-span-1'}
					title={'Daily Sum of Transaction Fees Past 7 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/f076a63d-c77f-4fce-b3ff-73f903cc36b7'}
				>
					<div class="h-96" slot="figure">
						<DailyTransactionFeesTotal
							xdata={dataObj.daily_transaction_fee_7days.xdata}
							ydata={dataObj.daily_transaction_fee_7days.ydata.filter((n) => n)}
							ydata2={dataObj.daily_transaction_fee_7days.ydata2.filter((n) => n)}
						/>
					</div>
				</Chart>
				<div class="ml-8 my-2 max-w-3xl">
					<p>
						In the last week, the daily sum of transaction fees has been steady at around $1,400 or
						700 NEAR.
					</p>
				</div>
				<Chart
					className={'col-span-1'}
					title={'Daily Sum of Transaction Fees past 30 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/7029bdcf-0bfc-4e93-9b84-68fb0229a64e'}
				>
					<div class="h-96" slot="figure">
						<DailyTransactionFeesTotal
							xdata={dataObj.daily_transaction_fee_30days.xdata}
							ydata={dataObj.daily_transaction_fee_30days.ydata.filter((n) => n)}
							ydata2={dataObj.daily_transaction_fee_30days.ydata2.filter((n) => n)}
						/>
					</div>
				</Chart>
				<div class="ml-8 my-2 max-w-3xl">
					<p>
						In comparison to the previous month, the daily sum of fees has seen both an increase in
						terms of NEAR and USD, but in terms of USD increasing higher, this could be due to the
						price of NEAR seeing an increase.
					</p>
				</div>
				<Chart
					className={'col-span-1'}
					title={'Daily Average of Transaction Fees past 7 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/f076a63d-c77f-4fce-b3ff-73f903cc36b7'}
				>
					<div class="h-96" slot="figure">
						<DailyTransactionFeesAvg
							xdata={dataObj.daily_transaction_fee_7days.xdata}
							ydata3={dataObj.daily_transaction_fee_7days.ydata3.filter((n) => n)}
							ydata4={dataObj.daily_transaction_fee_7days.ydata4.filter((n) => n)}
						/>
					</div>
				</Chart>
				<div class="ml-8 my-2 max-w-3xl">
					<p>The average transaction fee in the past week has been steady in both NEAR and USD.</p>
				</div>
				<Chart
					className={'col-span-1'}
					title={'Daily Average of Transaction Fees past 30 Days'}
					query_link={'https://next.flipsidecrypto.xyz/edit/queries/7029bdcf-0bfc-4e93-9b84-68fb0229a64e'}
				>
					<div class="h-96" slot="figure">
						<DailyTransactionFeesAvg
							xdata={dataObj.daily_transaction_fee_30days.xdata}
							ydata3={dataObj.daily_transaction_fee_30days.ydata3.filter((n) => n)}
							ydata4={dataObj.daily_transaction_fee_30days.ydata4.filter((n) => n)}
						/>
					</div>
				</Chart>
				<div class="ml-8 my-2 max-w-3xl">
					<p>
						In comparison, the average daily fee has decreased in terms of NEAR but increased in
						terms of USD, likely due to the price of NEAR increasing recently.
					</p>
				</div>
				<div class="ml-8 mt-6 max-w-3xl">
					<p>
						Over the past week, the NEAR platform has experience an increase in activity of almost
						all metrics as compared to the previous week beforehand.
					</p>
				</div>
			</div>
		</div>
	</main>
	<footer>
		<Footer />
	</footer>
</body>
