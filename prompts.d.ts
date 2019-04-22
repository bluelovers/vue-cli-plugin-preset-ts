/**
 * Created by user on 2019/4/23.
 */
declare const prompts: readonly [{
    readonly name: "replaceFiles";
    readonly type: "confirm";
    readonly message: "Replace current files with preset files?";
    readonly default: false;
}];
export = prompts;
