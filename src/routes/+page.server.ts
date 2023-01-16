import { Flipside } from '@flipsidecrypto/sdk/dist/src';
import type { QueryResultSet, Query } from '@flipsidecrypto/sdk/dist/src';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { FLIPSIDE_KEY } from '$env/static/private';

export const load = (async () => {
	const flipside = new Flipside(FLIPSIDE_KEY, 'https://node-api.flipsidecrypto.com');

	const swap_distributions: Query = {
		sql: `
		  
    `,
		ttlMinutes: 60 * 6,
		timeoutMinutes: 60 * 6,	
		cached: true
	};

    // Construct an array of flipside Query objects.
    const queries = [swap_distributions];

    // Map over array of queries, process & return an array of results.
    const results = queries.map(async function (query) {
       const result: QueryResultSet = await flipside.query.run(query)
       return JSON.parse(JSON.stringify(result?.records))
    });

    // Construct object of results of different queries.
    const data = {
        swap_distributions: results[0]
    };

	if (!results) {
		throw error(404, 'Not found');
	};
	return data
}) satisfies PageServerLoad
