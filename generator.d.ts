import PresetJson = require('./preset.json');
import PackageJson = require('./package.json');
declare type IPackageJsonFields = Partial<typeof PackageJson> & {
    scripts?: {
        [name: string]: string;
    };
    dependencies?: {
        [name: string]: string;
    };
    devDependencies?: {
        [name: string]: string;
    };
    resolutions?: {
        [name: string]: string;
    };
    [key: string]: unknown;
};
interface IVueCliGeneratorApi {
    extendPackage<T extends {
        [k: string]: unknown;
    }>(fields: (T & IPackageJsonFields) | ((pkg: T & IPackageJsonFields) => T & IPackageJsonFields)): void;
    resolve(_path: string): string;
    hasPlugin(id: string): boolean;
    onCreateComplete(cb: () => any): void;
    readonly entryFile: string;
    injectImports(file: string, code: string): void;
}
interface IVueCliGeneratorOptions {
    _isPreset?: boolean;
    prompts?: boolean;
    [k: string]: unknown;
}
declare type IVueCliGeneratorRootOptions = typeof PresetJson & {
    projectName: string;
    useConfigFiles: boolean;
    plugins: {
        [k: string]: {
            [k: string]: unknown;
        };
    };
    router: boolean;
    routerHistoryMode: boolean;
    vuex: boolean;
    cssPreprocessor: 'dart-sass' | 'node-sass' | string;
    bare: unknown;
    [k: string]: unknown;
};
interface IVueCliGeneratorOptionsThisPlugin {
    replaceFiles: boolean;
    depsCrossFetch: boolean;
    depsVueHeadful: boolean;
    depsVueSession: boolean;
    depsBluebird: boolean;
    [k: string]: unknown;
}
declare function cliPluginMain(api: IVueCliGeneratorApi, options: IVueCliGeneratorOptions & IVueCliGeneratorOptionsThisPlugin, rootOptions: IVueCliGeneratorRootOptions): void;
export = cliPluginMain;
