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

**What is a component**

In the current implementation components are all [functional and stateless](https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.ukhlhrqlw).

This means that UI is a function of state since we're using pure functions to build our views.

```
UI = f(state)
```

**How do I determine the scope of a component**

TODO

**What's the development workflow look like?**

Note: this is *a way* to do this, but not necessarily *the way* to build components. For this workflow let's create a component called `NewComponent`.

1. Create a branch with the name of the new component

Note: also make sure you're up to date

```
git checkout master
git pull -r
git checkout -b task/add-newcomponent
```

2. Install dependencies and start the storybook

```
npm i && npm start
```

open http://localhost:9001 in your browser

3. Create a `NewComponent` folder under `src` (see [Component Anatomy](#component-anatomy))
```
src/
+-- NewComponent/
```

4. Create a story for the `NewComponent`

```
src/
+-- NewComponent/
 `-- story.js
```

populate **story.js** with a default story

```js
// story.js
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import NewComponent from './index';

storiesOf('Card')
  .add('Default', () => (
    <NewComponent />
  ));
```

Now when you look at Storybook you should see a broken story (red screen)

5. Implement your component

```
src/
+-- NewComponent/
 `-- story.js
 `-- index.js
```

populate **index.js** with the new component

```js
import React from 'react';

const NewComponent = () => <div>NewComponent</div>;

export default NewComponent;
```
6. Write a snapshot test

```
src/
+-- NewComponent/
 `-- story.js
 `-- index.js
 `-- test.js
```

populate **test.js** with a test

```js
jest.unmock('./index');
import React from 'react';
import { renderAndCheckSnapshot } from '../testHelpers';
import NewComponent from './index';

describe('NewComponent', () => {
  it('NewComponent component', () => {
    renderAndCheckSnapshot(<NewComponent />);
  });
});
```

7. Run the test for the first time

It's important to note that this creates a snapshot of the component. All tests ran in the future will be tested against this snapshot to ensure they haven't changed.

```sh
npm t
```

8. Commit it!

```sh
git add .
git commit -m "Add NewComponent"
git push -u origin task/add-newcomponent
```

At this point it's a good idea to generate a PR on github :)

**How do I write tests for a component?**

Since components are [functional and stateless](https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.ukhlhrqlw) we can use snapshot testing to get complete coverage.

So to write a test you can render a component with a given set of properties and check it against a know good state (the snapshot)

So tests end up looking like this.

```js
jest.unmock('./index');
import React from 'react';
import { renderAndCheckSnapshot } from '../testHelpers';
import NewComponent from './index';

describe('NewComponent', () => {
  it('NewComponent component', () => {
    renderAndCheckSnapshot(<NewComponent />);
  });

  it('NewComponent width=100', () => {
    renderAndCheckSnapshot(<NewComponent width={100}/>);
  });
});
```

The first time the test is run it generates a new snapshot. The **second** time it's checked against the snapshot.

If you're curious here's what the `renderAndCheckSnapshot` function does:

```js
import renderer from 'react-test-renderer';

export const renderAndCheckSnapshot = (component) => {
  const renderedComponent = renderer.create(component);
  const tree = renderedComponent.toJSON();
  expect(tree).toMatchSnapshot();
};
```

**How do determine what a component does?**

TODO
