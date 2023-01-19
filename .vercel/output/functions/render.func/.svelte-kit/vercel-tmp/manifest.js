export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","flipside_logo.png","metricsdao.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-931dcc01.js","imports":["_app/immutable/start-931dcc01.js","_app/immutable/chunks/index-ac0e06b1.js","_app/immutable/chunks/singletons-d6391373.js","_app/immutable/chunks/index-eb481444.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
