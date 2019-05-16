# Parcel Project

## Technology stack

- Parcel
- Babel 7
- React
- Flow
- ESLint
- Stylelint
- Prettier
- Jest
- Storybook

## Stack description

### Parcel

Parcel is blazing fast, zero configuration web application bundler. It has out of the box support for JS, CSS, HTML, file assets, and more - no plugins needed. Code is automatically transformed using Babel, PostCSS, and PostHTML when needed - even node_modules. Parcel uses worker processes to enable multicore compilation, and has a filesystem cache for fast rebuilds even after a restart. Parcel automatically updates modules in the browser as you make changes during development.

### Babel 7

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Babel can transform syntax, polyfill features that are missing in your target environment, do source code transformations and more. It can convert JSX syntax, strip out type annotations. Babel is built out of plugins. Compose your own transformation pipeline using existing plugins or write your own. Babel tries to stay true to the ECMAScript standard, as much as reasonably possible.

### ESLint

It checks source code for stylistic as well as programmatic errors. ESLint helps to identify some mistakes that are made during coding. It is also used for adhering best practices and improving code quality and readability.

### Airbnb style guide

It is a set of standards that outline how code should be written and organized and it covers nearly every aspect of JavaScript. It used as a preset for ESLint.

### Stylelint

Stylelint is a linter that helps to avoid errors and enforce conventions in styles. It understands the latest CSS syntax, parses SCSS, extracts embedded styles from HTML, markdown and CSS-in-JS template literals.

### stylelint-config-standard

It extends recommended Stylelint config and turns on additional rules to enforce the common stylistic conventions found within CSS styleguides of big companies like and Airbnb. It favours flexibility over strictness for things like multi-line lists and single-line rulesets, and tries to avoid potentially divisive rules.

### Prettier

Prettier is an opinionated code formatter with support for many filetypes. Prettier enforces a consistent code style (i.e. code formatting) across your entire codebase by parsing code and re-printing it with its own rules taking the maximum line length into account.

### Flow

Flow is static type checker for JavaScript. It is often compared to TypeScript, but Flow is not a programming language in itself, but rather a tool. It integrates better with projects that are using Babel as a transpiler. With Flow you’ll have much higher type coverage with less type annotations faster than with TypeScript (on Linux).

Flow helps you to find potential problems with your code earlier, enhances error detection and improves DX. Flow and React are both Facebook products and they are used a lot together.

### Jest

Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly. Jest is well-documented, requires little configuration and can be extended to match your requirements.

### react-testing-library

The react-testing-library is a very light-weight solution for testing React components. It helps to avoid including implementation details of your components and rather focus on making your tests give you the confidence for which they are intended. As part of this, your testbase becomes maintainable in the long run so refactors of your components (changes to implementation but not functionality) don't break your tests and slow you and your team down.

### Storybook

Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components. It allows you to develop UI components in isolation, which can improve component reuse, testability, and development speed. 

### styled-components

styled-components allows you to write traditional CSS to style your components in JavaScript by utilising tagged template literals. It keeps track of which components are rendered on a page and injects their styles fully automatically. It generates unique class names for your styles, so you never have to worry about duplication, overlap or misspellings. Styling is tied to a specific component. You can style components based on their props or a global theme. It handles vendor prefixing automatically.

### React

A JavaScript library for building user interfaces. It's simple and declarative, it uses just plain JavaScript to build reusable components. 

## Extra features

- hot reload
- flow coverage
- jest coverage
- bundle visualizer
- make recipes
- pre-commit formatting
- babel resolver
- support for ~ alias (src)
- WebStorm aliases support
- filenames linting
- react-hooks linting
- styled-components setup
- react-testing-library setup

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode

### `yarn test`

Launches the test runner

### `yarn build`

Builds the app for production to the `dist` folder

### `yarn lint`

Run linters

### `yarn storybook`

Run Storybook

### `make serve`

Serve files in folder and open browser window

### `make build-info` 

Build src and open bundle analyzer in browser

### `make jest-coverage`

Get jest coverage and show report in browser

### `make flow-coverage`

Get flow coverage and show report in browser
