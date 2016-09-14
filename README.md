# Buffer Components

A shared set of UI Components

Demo: https://bufferapp.github.io/buffer-components/

## Table Of Contents

- [Quick Start](#quick-start)
- [Test](#test)
- [Component Anatomy](#component-anatomy)
- [FAQ](#faq)

## Quick Start

Install Node Modules

```sh
npm i
```

Start React Storybook

```sh
npm start
```

Open http://localhost:9001

## Test

Run Linter And Test

```sh
npm run test
```

Run Test and watch for changes

```sh
npm run test-watch
```

Note - *does not run all tests the first time*

Update Test Snapshots

```sh
npm run test-update
```

Note: only commit these if you have manually inspected them with a story

## Component Anatomy

```
src/ # root
+-- MyComponent/ # component root
  `-- index.js # component logic
  `-- story.js # storybook entry
  `-- test.js  # component tests
  +-- __snapshots__/  # jest snapshot location
    `-- test.js.snap # actual component snapshot
```

## FAQ

**How do I determine the scope of a component**

TODO

**What's the development workflow look like?**

Note: this is *a way* to do this, but not necessarily *the way* to build components.

1. Create a folder structure

**How do I write tests for a component?**

TODO

**How do determine what a component does?**

TODO
