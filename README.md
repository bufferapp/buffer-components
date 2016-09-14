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

This is a tough question, it really depends. But as a general rule, a component should be simple enough to be reusable across multiple applications and be not much longer than 150 lines of code. This is a good one to seek advice if you're not sure.

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

So tests end up looking like this:

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

You're verifying that each property change has the expected outcome in HTML.

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

**How Do I Update A Snapshot**

Let's say you've got a **component** that starts like this

```js
import React from 'react';

const NewComponent = () => <div>NewComponent</div>;

export default NewComponent;
```

and a **test** that looks like this

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

Now you want to add `height` property to the component

```js
import React, { PropTypes } from 'react';

const NewComponent = ({ height }) => <div style={{ height }}>NewComponent</div>;

NewComponent.propTypes = {
  height: PropTypes.number
};

export default NewComponent;
```

_Next time you run tests they'll fail because the output changed._

So after verifying that the output looks the way you want it to in Storybook (http://localhost:9001) and add a new test for the `height` property

```js
jest.unmock('./index');
import React from 'react';
import { renderAndCheckSnapshot } from '../testHelpers';
import NewComponent from './index';

describe('NewComponent', () => {
  it('NewComponent component', () => {
    renderAndCheckSnapshot(<NewComponent />);
  });

  it('NewComponent component', () => {
    renderAndCheckSnapshot(<NewComponent height={100}/>);
  });
});
```

you can update the snapshots

```
npm run test-update
```

**How do determine what a component does?**

There's a pattern you can follow

1. Look at the Component.propTypes section
  - This is essentially the API of the component
2. Look at the render function
3. Look at any helper functions
4. Ask one of the contributors :)
