# angular2-webpack-seed

[![Build Status](https://travis-ci.org/fgladisch/angular2-webpack-seed.svg?branch=master)](https://travis-ci.org/fgladisch/angular2-webpack-seed)

This is a minimalistic Angular 2+ seed project, featuring:
* [Angular 4.3](https://angular.io)
* [TypeScript 2.4](https://www.typescriptlang.org)
* [@types](https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files)
* [Bootstrap 4 (Beta)](http://v4-alpha.getbootstrap.com)
* [Ahead-of-Time Compilation](https://angular.io/guide/aot-compiler)
* [Tree Shaking](https://webpack.js.org/guides/tree-shaking) and [Compression](https://github.com/webpack-contrib/compression-webpack-plugin) — Tiny production files :mouse2:
* [Sass](http://sass-lang.com)
* [ng-bootstrap](https://ng-bootstrap.github.io)
* [ngx-translate](http://www.ngx-translate.com)
* [webpack 3](https://webpack.github.io)
* [@ngtools/webpack](https://www.npmjs.com/package/@ngtools/webpack) — Makes AOT + Sass possible :tada:
* [Karma](https://karma-runner.github.io)
* [Jasmine](http://jasmine.github.io)
* [TSLint](https://github.com/palantir/tslint)
* [Codelyzer](https://github.com/mgechev/codelyzer)

This seed follows the [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html).

## How to use

### Install dependencies

```bash
npm install
# or
yarn
```

### Development server

Use the following command to start a local development server which will display the application at [http://localhost:3000](http://localhost:3000).

```bash
npm start
# or
yarn start
```

### Test your code

The following command will run your unit tests with [Karma](https://karma-runner.github.io).

```bash
npm test
# or
yarn test
```

### Analyze your code with TSLint

Run [TSLint](https://github.com/palantir/tslint) with rules based on the [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html) with this command.

```bash
npm run lint
# or
yarn lint
```

### Build for production

Production files are located in `dist`.

This project uses [Ahead-of-Time Compilation](https://angular.io/guide/aot-compiler) and [Tree Shaking](https://webpack.js.org/guides/tree-shaking) for much smaller production files. Files over a threshold of 1KB are also gzipped, which results in approximately 150KB for all JS/HTML/CSS in this project.

```bash
npm run build
# or
yarn build
```

# License
[MIT](/LICENSE)
