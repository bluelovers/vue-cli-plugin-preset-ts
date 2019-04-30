/**
 * Created by user on 2019/4/23.
 */

interface IVueCliPrompt
{
	name: string,
	type: 'confirm' | string,
	message: string,
	default: unknown
}

const prompts: IVueCliPrompt[] = [
	{
		name: 'replaceFiles',
		type: 'confirm',
		message: 'Replace current files with preset files?',
		default: false
	},
	{
		name: 'depsVueAnalytics',
		type: 'confirm',
		message: 'Add vue-analytics?',
		default: true
	},
	{
		name: 'depsVueHeadful',
		type: 'confirm',
		message: 'Add vue-headful?',
		default: true
	},
	{
		name: 'depsVueSession',
		type: 'confirm',
		message: 'Add vue-session?',
		default: true
	},
	{
		name: 'depsVueGlobalEvents',
		type: 'confirm',
		message: 'Add vue-global-events?',
		default: true
	},
	{
		name: 'depsBluebird',
		type: 'confirm',
		message: 'Add bluebird?',
		default: true
	},
];

export = prompts
