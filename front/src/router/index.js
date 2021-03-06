/* 
	Imports and config
*/
	// Vue
	import Vue from 'vue';
	import VueRouter from 'vue-router';
	Vue.use(VueRouter);

	// Inner
	import store from '../store';
//

/* 
	Router definitions
*/
	// Routes collection
	const routes = [
		{
			path: '/',
			name: 'Home',
			component: () => import('../views/Home.vue'),
			meta: {
				// Define protected route
				// requiresAuth: true
				requiresAuth: false
			}
		},
		// {
		// 	path: '/login',
		// 	name: 'Login',
		// 	component: () => import('../views/Login.vue')
		// },
		{
			path: '/resources',
			name: 'Resources',
			component: () => import('../views/Resources.vue')
		},
		{
			path: '/game',
			name: 'Game',
			component: () => import('../views/Game.vue')
		},
		{
			path: '/game/history',
			name: 'GameHistory',
			component: () => import('../views/GameHistory.vue')
		},
		{
			path: '/game/history2',
			name: 'GameHistory2',
			component: () => import('../views/GameHistory2.vue')
		},
		{
			path: '/game/history/quiz8',
			name: 'GameHistoryQuiz8',
			component: () => import('../views/GameHistoryQuiz8.vue')
		},
		{
			path: '/game/history/quiz9',
			name: 'GameHistoryQuiz9',
			component: () => import('../views/GameHistoryQuiz9.vue')
		},
		{
			path: '/help-us',
			name: 'HelpUs',
			component: () => import('../views/HelpUs.vue')
		},
		{
			path: '/partners',
			name: 'Partners',
			component: () => import('../views/Partners.vue')
		},
		{
			path: '/contact',
			name: 'Contact',
			component: () => import('../views/Contact.vue')
		},
		// {
		// 	// Define a route param
		// 	path: '/post/:id',
		// 	name: 'Post',
		// 	component: () => import('../views/Post.vue')
		// },
		{
			// Catch undefined views
			path: '*',
			name: 'NotFound',
			component: () => import('../views/NotFound.vue')
		}
	]

	// Create router
	const router = new VueRouter({
		mode: 'history',
		routes
	})
//


/* 
	Set basic AuthGuard with store getters
*/
	router.beforeEach((to, from, next) => {
		// Set auth values
		const authenticatedUser = store.getters.isAuthenticated;
		const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

		// Check for protected route
		if (requiresAuth && !authenticatedUser) next({ path: '/login' })
		else next();
	});
//


/* 
	Export Router
*/
	export default router
//