# How to add a new Icon

## Naming

Names of icons are written in Start Case (all words capitalised) and always end in "Icon". Example: `ArrowLeftIcon`

## Adding a new Icon

1. **Create a new Icon component** on `Icon/Icons/` that extends Icon props:
Example of adding `NewIcon.jsx`: 
```js
import React from 'react';
import Icon from '../../Icon';

const NewIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path  />
  </Icon>;

NewIcon.propTypes = {
  ...Icon.propTypes,
};

export default NewIcon;
```

2. **Add NewIcon's export path** on `Icon/Icons/index.jsx`:
```js
export NewIcon from './NewIcon';
```

This will allow to use a shorter path when importing
```js
import { NewIcon } from '@bufferapp/components';
```

instead of 
```js
import NewIcon from '@bufferapp/components/Icon/Icons/NewIcon';
```

thanks to `buffer-components/index.js`: 
```js
export * from './Icon/Icons'
```

3. **Add a story for the NewIcon** on `Icon/story.jsx`
```js
import NewIcon from './Icons/NewIcon';
  
.add('NewIcon', () => (
   <NewIcon />
))

```

4. **You're done** :tada: 