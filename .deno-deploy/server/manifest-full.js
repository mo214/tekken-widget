export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.6gAUJG0S.js",app:"_app/immutable/entry/app.CSQenl0W.js",imports:["_app/immutable/entry/start.6gAUJG0S.js","_app/immutable/chunks/CxJPEE1J.js","_app/immutable/chunks/D_lfHUOF.js","_app/immutable/chunks/B3auK2hL.js","_app/immutable/entry/app.CSQenl0W.js","_app/immutable/chunks/B3auK2hL.js","_app/immutable/chunks/D_lfHUOF.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/B5sbPd06.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/rank",
				pattern: /^\/api\/rank\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/rank/_server.ts.js'))
			},
			{
				id: "/twitch-widget",
				pattern: /^\/twitch-widget\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
