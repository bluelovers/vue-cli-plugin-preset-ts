// @ts-ignore
import Vue from 'vue';
// @ts-ignore
import VueAnalytics from 'vue-analytics'
// @ts-ignore
import router from '../router'
// @ts-ignore
import { production, development } from '../lib/const'

/**
 * @link https://github.com/MatteoGabriele/vue-analytics
 */
Vue.use(VueAnalytics, {
	id: 'UA-xxxxxxxx-x',
	router,
	autoTracking: {
		screenview: true,
		pageviewTemplate(route)
		{
			return {
				page: route.path,
				title: document.title,
				location: window.location.href,
			}
		},
		exception: true,

	},
	checkDuplicatedScript: true,
	debug: {
		sendHitTask: true,
		trace: true,
		//enabled: development,
	},
	/**
	 * this is right after the tracker and before every other hit to Google Analytics
	 */
	beforeFirstHit()
	{
		// this is right after the tracker and before every other hit to Google Analytics
	},
	/**
	 * here Google Analytics is ready to track!
	 */
	ready()
	{
		// here Google Analytics is ready to track!
	},
});

export interface IVueAnalytics$ga
{
	event(eventCategory: string, eventAction: string, eventLabel: string, eventValue?: number): void
	event(argv: {
		eventCategory: string,
		eventAction: string,
		eventLabel: string,
		eventValue: number,
	}): void
}

// @ts-ignore
declare module 'vue/types/vue'
{
	interface Vue
	{
		$ga: IVueAnalytics$ga
	}

	interface VueConstructor
	{
		$ga: IVueAnalytics$ga
	}
}
