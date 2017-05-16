# Changelog

## 0.4.20 (May 16, 2017)

- Add `outerSpace` config to `Text` component

## 0.4.19 (April 26, 2017)

- All Input-* handle submitting state

## 0.4.18 (April 26, 2017)

- Add `color` and `reducedPadding` configs to `Card` component

## 0.4.17 (April 25, 2017)

- Add `bottom` and `right` configs to `Popover` component

## 0.4.16 (April 19, 2017)

- Bugfix on `InputDate` and `InputTime` components

## 0.4.15 (April 17, 2017)

- Add `InputTime` component

## 0.4.14 (April 17, 2017)

- Add `newTab` and `unstyled` configs to `LinkifiedText` component

## 0.4.13 (April 17, 2017)

- Add `newTab` config to `Link` component

## 0.4.12 (April 12, 2017)

- Add `cursor: default;` to `disabled` config of `Button` component

## 0.4.11 (April 11, 2017)

- Add `Input`, `InputEmail` and `InputPassword` components

## 0.4.10 (April 11, 2017)

- Add `IdTag` component

## 0.4.9 (April 6, 2017)

- Add `Popover` component

## 0.4.8 (April 6, 2017)

- Add `mini` config to `Text` component

## 0.4.7 (April 6, 2017)

- Remove `font-size` set on `Link`
- Add `size` config to `LinkifiedText` component

## 0.4.6 (March 28, 2017)

- Reduce `font-size-small` value from `0.9rem` to `0.8rem`

## 0.4.5 (March 24, 2017)

- Add `newTabIcon` config to `Icon` component

## 0.4.4 (March 24, 2017)

- Set `Button` component's `margin` property to `0`

## 0.4.3 (March 21, 2017)

- Update `MultipleImages` component to have a `rounded` flag to set a `border-radius` on itself

## 0.4.2 (March 20, 2017)

- Add export of `MultipleImages` component to `index.js`

## 0.4.1 (March 16, 2017)

- Revert color `lochmara` to `curious-blue`
- Revert color `lochmara-hover` to `denim`
- Revert color `red` to `torch-red`

## 0.4.0 (March 16, 2017)

- Add `MultipleImages` component

## 0.3.0 (March 14, 2017)

- Add a11y addon

## 0.2.2 (March 8, 2017)

- Add blue color config to `Text` component

## 0.2.1 (February 23, 2017)

- Add guide to our `CHANGELOG`
- Update past `CHANGELOG` updates to use present tense to keep inline with our commits

## 0.2.0 (February 23, 2017)

- Remove our icon font dependancy in replace of our new `Icon` component

## 0.1.25 (February 22, 2017)

- Use `rem` over `em` since it's relative to the root font size

## 0.1.24 (February 22, 2017)

- Consistency tweaks to `Link` and `Icon` components

## 0.1.23 (February 22, 2017)

- Add and use SVG `Icons` components
- Add `Overlay` component

## 0.1.19 (February 16, 2017)

Bring these back:

- Add `--black` as a color variable
- Make transition speed 100ms (as per Google's rail model)

## 0.1.18 (February 16, 2017)

- Add `minHeight` and `minWidth` properties to `Image`

## 0.1.16 (February 13, 2017)

- Add `--black` as a color variable
- Make transition speed 100ms (as per google's rail model)

## 0.1.13 (February 7, 2017)

- Add `withText` config to `Loader` to display with `Text`
- Update default config of `Loader` to display without text

## 0.1.12 (February 3, 2017)

- Make `noStyle` button cursor = pointer

## 0.1.11 (February 3, 2017)

- Added `hovered` prop to `Card` component
- Remove `layout.css` file and references

## 0.1.3 (January 10, 2017)

- Remove component dependency on `typography.css`

## 0.1.2 (January 10, 2017)

- Remove `margin-bottom` property from `Card` component

## 0.1.1 (January 9, 2017)

- Fix incompatible CSS value issue with button states
- Add four color subclasses appended with `-light` and `-ultra-light`
- Update `border-color` property of the failed `Card` config border

## 0.1.0 (January 6, 2017)

- Add `Loader`
- Remove `.Button` class and applied its styles directly on the `button` node
- Simplify CSS class names
- Rename `error` configuration to `warning`
- Remove `inApp` configuration as this style is the now default style
- Add `large` configuration
- Simplify CSS class names
- Add `failed` configuration

## 0.0.4 (December 17, 2016)

- Remove `.babelrc` from npm package to fix issues

## 0.0.3 (December 16, 2016)

- Switch to CSS Modules for `Button` and `Card`
- Move react and react-dom to `peerDependencies`

## 0.0.1

- Initial release
- Use ReactCSS

---

## Guideline to updating the changelog

We use [semantic versioning](http://semver.org) to record updates to our changelog:

> Given a version number `MAJOR.MINOR.PATCH`, increment the:

>- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.
- Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.
