## react-typescript-module
This repo lets you create a module using react and typescript with minimal build configuration.

### Get started 
* Clone this repo, remove origin and install modules
	* `git clone https://github.com/dumbape/react-typescript-module.git <Your Module Name>`
	* `cd <Your Module Name>`
	* `git remote remove origin`
	* `npm install`
* Build your React Typescript module as usual in the `src` folder. 
* Make a separate `.ts` file which would have all the exports from the module. For convenience, an `index.ts` has been provided, however, you may make your own anywhere.
* Open `rollup.config.js` and adjust the `input` parameter (by default points to sec/index.ts) so that it points to the `.ts` file containing all the exports.
* Run `npm run build`. A build folder will be generated.
* Open `package.json` and change `name` and `version` to your module name and version. Optionally, you may add a `description`. Point `types` to the `.d.ts` file generated in build folder, which contains all exports. Do not change `main`, `module` and `jsnext:main`.
* Your module is ready to be used.

### Test the module
* Create a new react project (with or wihout typescript).
	* `npx create-react-app testapp && cd testapp` OR
	* `npx create-react-app testapp --typescript && cd testapp`
* Install the created module.
	* `npm install <Path to the root folder of your module>`
* Try using your component as any other module by including it in any `.tsx` or `.jsx` file.
	* `import { <Your Component> } from 'your-module'`

### Publish the module
* The module is ready to be published for react users (with and without typescript!).
* Login to npm and publish
	* `npm login`
	* `npm publish`
	
### Contribute
You are free to raise issues and PR's to improve the repo and help people build modules with ease :) 


