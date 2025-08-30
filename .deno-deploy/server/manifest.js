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
		client: {start:"_app/immutable/entry/start.D3_jgND-.js",app:"_app/immutable/entry/app.Cyhyb3fj.js",imports:["_app/immutable/entry/start.D3_jgND-.js","_app/immutable/chunks/CdjomvNQ.js","_app/immutable/chunks/CW4loO8v.js","_app/immutable/chunks/Dk9nPTzg.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/entry/app.Cyhyb3fj.js","_app/immutable/chunks/Dk9nPTzg.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CW4loO8v.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/ClHLXQE0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
