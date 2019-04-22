import PresetJson = require('./preset.json');
import PackageJson = require('./package.json');
import fs = require('fs');
import path = require('path');

type IPackageJsonFields = Partial<typeof PackageJson> & {
	scripts?: {
		[name: string]: string,
	},
	dependencies?: {
		[name: string]: string,
	},
	devDependencies?: {
		[name: string]: string,
	},
	resolutions?: {
		[name: string]: string,
	},

	[key: string]: unknown,
}

interface IVueCliGeneratorApi
{
	extendPackage<T extends {
		[k: string]: unknown,
	}>(fields: T & IPackageJsonFields | ((pkg: T & IPackageJsonFields) => T & IPackageJsonFields)): void

	resolve(_path: string): string,

	hasPlugin(id: string): boolean,

	onCreateComplete(cb: () => any): void
}

interface IVueCliGeneratorOptions
{
	_isPreset?: boolean,
	prompts?: boolean,

	[k: string]: unknown,
}

type IVueCliGeneratorRootOptions = typeof PresetJson & {
	projectName: string,
	useConfigFiles: boolean,
	plugins: {
		[k: string]: {
			[k: string]: unknown,
		}
	},
	router: boolean,
	routerHistoryMode: boolean,
	vuex: boolean,
	cssPreprocessor: 'dart-sass' | 'node-sass' | string,
	bare: unknown,

	[k: string]: unknown,
}

interface IVueCliGeneratorOptionsThisPlugin
{
	replaceFiles: boolean,
}

function cliPluginMain(api: IVueCliGeneratorApi,
	options: IVueCliGeneratorOptions & IVueCliGeneratorOptionsThisPlugin,
	rootOptions: IVueCliGeneratorRootOptions,
): void
{
	api.extendPackage((pkg) =>
	{

		console.log(`[Generator] extendPackage`);
		console.dir(pkg);

		pkg.devDependencies = {
			"@bluelovers/tsconfig": "^1.0.2",
			"@types/webpack-chain": "^5.2.0",
			"terser": "3.17.0",
			"terser-webpack-plugin": "^1.2.3",

			...pkg.devDependencies,
		};

		return pkg
	});

	console.log(`[Generator] options`);
	console.dir(options);

	console.log(`[Generator] rootOptions`);
	console.dir(rootOptions);

	let files_not_exists = Object.entries([
			'tsconfig.json',
			'.browserslistrc',
		].reduce((a, file) =>
		{

			a[file] = file;

			return a
		}, Object.entries({
			'.gitignore': 'gitignore',
		}).reduce((a, [file, file2]) =>
		{

			file2 = path.join('dot', file2);
			a[file] = file2

			return a;
		}, {} as {
			[file: string]: string,
		})))
		.reduce((a, [file, file2]) =>
		{

			let fpath = api.resolve(file);
			let exists = fs.existsSync(fpath);

			if (!exists || options.replaceFiles)
			{
				let fpath2 = path.resolve(__dirname, 'files', file2);
				let exists2 = fs.existsSync(fpath2);

				if (exists2)
				{
					if (exists)
					{
						let bak = fpath + '.bak';

						if (fs.existsSync(bak))
						{
							if (!fs.readFileSync(fpath).equals(fs.readFileSync(bak)))
							{
								console.log(`[Generator] backup ${file}`);

								fs.unlinkSync(bak);
								fs.copyFileSync(fpath, bak);
							}
							else
							{
								console.log(`[Generator] skip backup ${file}`);
							}
						}
						else
						{
							console.log(`[Generator] backup ${file}`);
							fs.copyFileSync(fpath, bak);
						}
					}

					a[file] = fpath2;
				}
			}

			return a
		}, {} as {
			[file: string]: string,
		})
	;

	api.onCreateComplete(() =>
	{
		console.log(`\n`);

		console.log(`[Generator] onCreateComplete`);

		Object.entries(files_not_exists)
			.forEach(function ([file, fpath2])
			{
				let fpath = api.resolve(file);
				let exists = fs.existsSync(fpath);

				if (exists)
				{
					console.log(`[Generator] overwrite ${file}`);

					let bak = fpath + '.bak';

					if (!fs.existsSync(bak))
					{
						fs.renameSync(fpath, bak);
					}

					fs.copyFileSync(fpath2, fpath);
				}
				else
				{
					console.log(`[Generator] create ${file}`);
					fs.copyFileSync(fpath2, fpath);
				}
			})
		;

		console.log(`\n`);
	});
}

export = cliPluginMain
