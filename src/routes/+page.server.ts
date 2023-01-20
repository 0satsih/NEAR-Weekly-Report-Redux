import { Flipside } from '@flipsidecrypto/sdk/dist/src';
import type { QueryResultSet, Query } from '@flipsidecrypto/sdk/dist/src';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load = (async () => {

	const flipside = new Flipside("1f5ac839-b5bd-404a-93ff-8f06f84e3a49", 'https://node-api.flipsidecrypto.com');

	const daily_gas_7days: Query = {
		sql: `
    SELECT
    date_trunc('day', block_timestamp) as date,
    sum(gas_used / 1e18) as total_gas_used_peta,
    avg(gas_used / 1e18) as avg_gas_used_peta
  FROM
    near.core.fact_transactions
  WHERE
    date > dateadd(day, -7, current_date())
  GROUP BY
    1
  ORDER BY
    1 DESC
    `,
		ttlMinutes: 60 * 6,
		timeoutMinutes: 60 * 6,
		cached: true
	};
	const daily_gas_30days: Query = {
		sql: `
    SELECT
  date_trunc('day', block_timestamp) as date,
  sum(gas_used / 1e18) as total_gas_used_peta,
  avg(gas_used / 1e18) as avg_gas_used_peta
FROM
  near.core.fact_transactions
WHERE
  date > dateadd(day, -30, current_date())
GROUP BY
  1
ORDER BY
  1 DESC
    `,
		ttlMinutes: 60 * 6,
		timeoutMinutes: 60 * 6,
		cached: true
	};
	const daily_active_users_7days: Query = {
		sql: `
    SELECT
  date_trunc('day', block_timestamp) as date,
  count(distinct tx_signer) as users
FROM
  near.core.fact_transactions
WHERE
  date > dateadd(day, -7, current_date())
GROUP BY
  1
ORDER BY
  1 DESC
    `,
		ttlMinutes: 60 * 6,
		timeoutMinutes: 60 * 6,
		cached: true
	};
	const daily_active_users_30days: Query = {
		sql: `
    SELECT
  date_trunc('day', block_timestamp) as date,
  count(distinct tx_signer) as users
FROM
  near.core.fact_transactions
WHERE
  date > dateadd(day, -30, current_date())
GROUP BY
  1
ORDER BY
  1 DESC
    `,
		ttlMinutes: 60 * 6,
		timeoutMinutes: 60 * 6,
		cached: true
	};
	const daily_new_users_7days: Query = {
		sql: `
    with
  users_first as (
    SELECT
      tx_signer as user,
      min(block_timestamp) as first_time
    FROM
      near.core.fact_transactions
    GROUP BY
      1
  )
SELECT
  date_trunc('day', first_time) as first_time,
  count(user) as new_users
FROM
  users_first
WHERE
  first_time > dateadd(day, -7, current_date())
GROUP BY
  1
ORDER BY
  1 DESC
    `,
		ttlMinutes: 60 * 6,
		timeoutMinutes: 60 * 6,
		cached: true
	};
	const daily_new_users_30days: Query = {
		sql: `
    with
  users_first as (
    SELECT
      tx_signer as user,
      min(block_timestamp) as first_time
    FROM
      near.core.fact_transactions
    GROUP BY
      1
  )
SELECT
  date_trunc('day', first_time) as first_time,
  count(user) as new_users
FROM
  users_first
WHERE
  first_time > dateadd(day, -30, current_date())
GROUP BY
  1
ORDER BY
  1 DESC
    `,
		ttlMinutes: 60 * 6,
		timeoutMinutes: 60 * 6,
		cached: true
	};

	const daily_transactions_7days: Query = {
		sql: `
    with
  near_transactions as (
    SELECT
      DATE_TRUNC('day', block_timestamp) as date,
      count(distinct tx_hash) as daily_transaction_count
    FROM
      near.core.fact_transactions
    GROUP BY
      1
    ORDER BY
      1
  )
SELECT
  *
FROM
  near_transactions
WHERE
  date > dateadd(day, -7, current_date())
    `,
		ttlMinutes: 60 * 6,
		timeoutMinutes: 60 * 6,
		cached: true
	};
	const daily_transactions_30days: Query = {
		sql: `
    with
  near_transactions as (
    SELECT
      DATE_TRUNC('day', block_timestamp) as date,
      count(distinct tx_hash) as daily_transaction_count
    FROM
      near.core.fact_transactions
    GROUP BY
      1
    ORDER BY
      1
  )
SELECT
  *
FROM
  near_transactions
WHERE
  date > dateadd(day, -30, current_date())
    `,
		ttlMinutes: 60 * 6,
		timeoutMinutes: 60 * 6,
		cached: true
	};
	const daily_transaction_fee_7days: Query = {
		sql: `
    with
  daily_near_price as (
    SELECT
      date_trunc('day', timestamp) as date,
      avg(price_usd) as price_usd
    FROM
      near.core.fact_prices
    WHERE
      symbol = 'wNEAR'
    GROUP BY
      1
  )
SELECT
  a.date,
  total_tx_fees_near,
  avg_tx_fees_near,
  price_usd,
  total_tx_fees_near * price_usd as total_tx_fees_usd,
  avg_tx_fees_near * price_usd as avg_tx_fees_usd
FROM
  (
    SELECT
      date_trunc('day', block_timestamp) as date,
      sum(transaction_fee / 1e24) as total_tx_fees_near,
      avg(transaction_fee / 1e24) as avg_tx_fees_near
    FROM
      near.core.fact_transactions
    GROUP BY 1
  ) a
  INNER JOIN daily_near_price b ON a.date = b.date
WHERE
  a.date > dateadd(day, -7, current_date())
ORDER BY
  1 DESC
    `,
		ttlMinutes: 60 * 6,
		timeoutMinutes: 60 * 6,
		cached: true
	};
	const daily_transaction_fee_30days: Query = {
		sql: `
    with
  daily_near_price as (
    SELECT
      date_trunc('day', timestamp) as date,
      avg(price_usd) as price_usd
    FROM
      near.core.fact_prices
    WHERE
      symbol = 'wNEAR'
    GROUP BY
      1
  )
SELECT
  a.date,
  total_tx_fees_near,
  avg_tx_fees_near,
  price_usd,
  total_tx_fees_near * price_usd as total_tx_fees_usd,
  avg_tx_fees_near * price_usd as avg_tx_fees_usd
FROM
  (
    SELECT
      date_trunc('day', block_timestamp) as date,
      sum(transaction_fee / 1e24) as total_tx_fees_near,
      avg(transaction_fee / 1e24) as avg_tx_fees_near
    FROM
      near.core.fact_transactions
    GROUP BY 1
  ) a
  INNER JOIN daily_near_price b ON a.date = b.date
WHERE
  a.date > dateadd(day, -30, current_date())
ORDER BY
  1 DESC
    `,
		ttlMinutes: 60 * 6,
		timeoutMinutes: 60 * 6,
		cached: true
	};
	const daily_active_contracts_7days: Query = {
		sql: `
    with
  contracts as (
    SELECT
      b.tx_receiver as contract,
      a.block_timestamp as time,
      b.tx_status
    FROM
      near.core.fact_actions_events a
      JOIN near.core.fact_transactions b ON a.tx_hash = b.tx_hash
    WHERE
      action_name = 'FunctionCall'
  )
SELECT
  case
    when tx_status = 'Success' then 'Successful Execution'
    else 'Failed Execution'
  end as status,
  date_trunc('day', time) as date,
  count(distinct contract) as contracts
FROM
  contracts
WHERE
  date > dateadd(day, -7, current_date())
GROUP BY
  1,
  2
ORDER BY
  2 DESC
    `,
		ttlMinutes: 60 * 6,
		timeoutMinutes: 60 * 6,
		cached: true
	};
	const daily_active_contracts_30days: Query = {
		sql: `
    with
  contracts as (
    SELECT
      b.tx_receiver as contract,
      a.block_timestamp as time,
      b.tx_status
    FROM
      near.core.fact_actions_events a
      JOIN near.core.fact_transactions b ON a.tx_hash = b.tx_hash
    WHERE
      action_name = 'FunctionCall'
  )
SELECT
  case
    when tx_status = 'Success' then 'Successful Execution'
    else 'Failed Execution'
  end as status,
  date_trunc('day', time) as date,
  count(distinct contract) as contracts
FROM
  contracts
WHERE
  date > dateadd(day, -30, current_date())
GROUP BY
  1,
  2
ORDER BY
  2 DESC
    `,
		ttlMinutes: 60 * 6,
		timeoutMinutes: 60 * 6,
		cached: true
	};
	const daily_new_contracts_7days: Query = {
		sql: `
    with
  contracts_first as (
    SELECT
      b.receiver_id as contract,
      min(a.block_timestamp) as first_time
    FROM
      near.core.fact_actions_events a
      JOIN near.core.fact_receipts b ON a.tx_hash = b.tx_hash
    WHERE
      action_name = 'DeployContract'
    GROUP BY
      1
  )
SELECT
  date_trunc('day', first_time) as date,
  count(*) as new_contracts
FROM
  contracts_first
WHERE
  date > dateadd(day, -7, current_date())
GROUP BY
  1
ORDER BY
  1 DESC
    `,
		ttlMinutes: 60 * 6,
		timeoutMinutes: 60 * 6,
		cached: true
	};
	const daily_new_contracts_30days: Query = {
		sql: `
    with
  contracts_first as (
    SELECT
      b.receiver_id as contract,
      min(a.block_timestamp) as first_time
    FROM
      near.core.fact_actions_events a
      JOIN near.core.fact_receipts b ON a.tx_hash = b.tx_hash
    WHERE
      action_name = 'DeployContract'
    GROUP BY
      1
  )
SELECT
  date_trunc('day', first_time) as date,
  count(*) as new_contracts
FROM
  contracts_first
WHERE
  date > dateadd(day, -30, current_date())
GROUP BY
  1
ORDER BY
  1 DESC
    `,
		ttlMinutes: 60 * 6,
		timeoutMinutes: 60 * 6,
		cached: true
	};

	// Construct an array of flipside Query objects.
	const queries = [
		daily_gas_7days,
		daily_gas_30days,
		daily_active_users_7days,
		daily_active_users_30days,
		daily_new_users_7days,
		daily_new_users_30days,
		daily_transactions_7days,
		daily_transactions_30days,
		daily_transaction_fee_7days,
		daily_transaction_fee_30days,
		daily_active_contracts_7days,
		daily_active_contracts_30days,
		daily_new_contracts_7days,
		daily_new_contracts_30days
	];

	// Map over array of queries, process & return an array of results.
	const results = queries.map(async function (query) {
		const result: QueryResultSet = await flipside.query.run(query);
		return JSON.parse(JSON.stringify(result?.records));
	});

	// Construct object of results of different queries.
	const data = {
		daily_gas_7days: results[0],
		daily_gas_30days: results[1],
		daily_active_users_7days: results[2],
		daily_active_users_30days: results[3],
		daily_new_users_7days: results[4],
		daily_new_users_30days: results[5],
		daily_transactions_7days: results[6],
		daily_transactions_30days: results[7],
		daily_transaction_fee_7days: results[8],
		daily_transaction_fee_30days: results[9],
		daily_active_contracts_7days: results[10],
		daily_active_contracts_30days: results[11],
		daily_new_contracts_7days: results[12],
		daily_new_contracts_30days: results[13]
	};

	if (!results) {
		throw error(404, 'Not found');
	}
  else {
    return data;
  }
	
}) satisfies PageServerLoad;
