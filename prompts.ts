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

const prompts = [
	{
		name: 'replaceFiles',
		type: 'confirm',
		message: 'Replace current files with preset files?',
		default: false
	},
] as const;

export = prompts
