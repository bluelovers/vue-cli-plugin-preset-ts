/**
 * Created by user on 2019/4/23.
 */
interface IVueCliPrompt {
    name: string;
    type: 'confirm' | string;
    message: string;
    default: unknown;
}
declare const prompts: IVueCliPrompt[];
export = prompts;
