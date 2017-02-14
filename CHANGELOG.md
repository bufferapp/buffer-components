# Changelog

## 0.1.16 (February 13, 2017)

- Add `--black` as a color variable
- Make transition speed 100ms (as per google's rail model)

## 0.1.13 (February 7, 2017)

- Added `withText` config to `Loader` to display with `Text`
- Updated default config of `Loader` to display without text

## 0.1.12 (February 3, 2017)

- Make `noStyle` button cursor = pointer

## 0.1.11 (February 3, 2017)

- Added `hovered` prop to `Card` component
- Removed `layout.css` file and references

## 0.1.3 (January 10, 2017)

- Removed component dependency on `typography.css`

## 0.1.2 (January 10, 2017)

- Removed the `margin-bottom` property from the `Card` component

## 0.1.1 (January 9, 2017)

- Fixed incompatible CSS value issue with button states
- Added four color subclasses appended with `-light` and `-ultra-light`
- Updated the border color of the failed `Card` configuration border

## 0.1.0 (January 6, 2017)

- Added `Loader`
- Removed `.Button` class and applied its styles directly on the `button` node
- Simplified CSS class names
- Renamed `error` configuration to `warning`
- Removed `inApp` configuration as this style is the now default style
- Added `large` configuration
- Simplified CSS class names
- Added `failed` configuration

## 0.0.4 (December 17, 2016)

- Remove `.babelrc` from npm package to fix issues

## 0.0.3 (December 16, 2016)

- Switch to CSS Modules for `Button` and `Card`
- Moved react and react-dom to `peerDependencies`

## 0.0.1

- Initial release.
- Using ReactCSS
