# Changelog

## 2.2.0 (June 26, 2018)

- Add `InputStateless` and modify `Input` so that the focus styling works
- Fix font stylying and sizing of `Select`

## 2.1.5 (June 6, 2018)

- Clean up `Popover` component styling.

## 2.1.4 (May 16, 2018)

- Use flexbox to center the `Popover` to avoid blurry rendering from the transform.

## 2.1.3 (December 13, 2017)

- Reset font `mini` to `0.9rem` and remove `0.5rem` duplicate
- Pass `module` into `storiesOf` to remove `missing module` warning

## 2.1.2 (December 12, 2017)

- Add `linkStyle` config to `ButtonStateless`

## 0.5.22 (June 13, 2017)

- Remove setting font-family with global CSS rule and set fontFamily on components that need it

## 0.5.21 (June 13, 2017)

- Set default `alt` text to empty string

## 0.5.20 (June 8, 2017)

- Change the `lineHeight` CSS property on the `ButtonStateless` component to `'unset'` to fix Safari bug

## 0.5.19 (June 8, 2017)

- Remove `inline-flex` from `InputTime`'s `default` style
- Add missing `,` in our `fontFamily` value

## 0.5.18 (June 7, 2017)

- Make first day of week configurable in `InputDate`

## 0.5.17 (June 5, 2017)

- Change `InputDate` selected date color to universal blue

## 0.5.16 (June 5, 2017)

- Remove browser prefix strings as keys and replaces them with preferred keys

## 0.5.15 (June 5, 2017)

- Add `CloseSmallIcon`, `Notification`, and `NotificationClose` to `Icon/index.js`

## 0.5.14 (June 5, 2017)

- Add `CloseSmallIcon`, `Notification`, and `NotificationClose` components
- Update `WarningIcon` component

## 0.5.13 (June 5, 2017)

- Add a `lineHeight: 0` rule to our `noStyle` config on ButtonStateless

## 0.5.12 (June 1, 2017)

- Add `disabled` config to `InputTime` component

## 0.5.11 (May 31, 2017)

- Add `quaternary` config to `ButtonStateless` component

## 0.5.10 (May 26, 2017)

- Add `noStyle` config to `InputTimes`

## 0.5.9 (May 25, 2017)

- Fix a slight browser UI bug that occurs when a `select` element is the child of a `div`

## 0.5.8 (May 25, 2017)

- Remove `icon` config from `Button`

## 0.5.7 (May 24, 2017)

- Replace `background` with `backgroundColor` on all `icon` config states

## 0.5.6 (May 24, 2017)

- Replace `backgroundColor` with `background` on `icon` config hover state

## 0.5.5 (May 24, 2017)

- Add `iconHovered` state to `ButtonStateless` `icon` config

## 0.5.4 (May 24, 2017)

- Remove `lineHeight` from `ButtonStateless` and replace with `icon` config

## 0.5.3 (May 24, 2017)

- Apply `lineHeight: 0` to `ButtonStateless`

## 0.5.2 (May 23, 2017)

- `Button` manages own focus and hover state
- `Link` manages own focus and hover state

## 0.5.1 (May 19, 2017)

- Fix `Button` noStyle
- Make `Link` focusable/blurable

## 0.5.0 (May 19, 2017)

- Migrate to Inline Styles

## 0.4.24 (May 18, 2017)

- Replace `height` CSS property on `SectionHeader` with `padding-top` and `padding-bottom`

## 0.4.23 (May 17, 2017)

- Add `Select`

## 0.4.22 (May 17, 2017)

- Update `SectionHeader` CSS `flex-direction` add `align-items` with `center`

## 0.4.21 (May 17, 2017)

- Add `SectionHeader`

## 0.4.20 (May 16, 2017)

- Add `outerSpace` config to `Text`

## 0.4.19 (April 26, 2017)

- All Input-* handle submitting state

## 0.4.18 (April 26, 2017)

- Add `color` and `reducedPadding` configs to `Card`

## 0.4.17 (April 25, 2017)

- Add `bottom` and `right` configs to `Popover`

## 0.4.16 (April 19, 2017)

- Bugfix on `InputDate` and `InputTime`

## 0.4.15 (April 17, 2017)

- Add `InputTime`

## 0.4.14 (April 17, 2017)

- Add `newTab` and `unstyled` configs to `LinkifiedText`

## 0.4.13 (April 17, 2017)

- Add `newTab` config to `Link`

## 0.4.12 (April 12, 2017)

- Add `cursor: default;` to `disabled` config of `Button`

## 0.4.11 (April 11, 2017)

- Add `Input`, `InputEmail` and `InputPassword`

## 0.4.10 (April 11, 2017)

- Add `IdTag`

## 0.4.9 (April 6, 2017)

- Add `Popover`

## 0.4.8 (April 6, 2017)

- Add `mini` config to `Text`

## 0.4.7 (April 6, 2017)

- Remove `font-size` set on `Link`
- Add `size` config to `LinkifiedText`

## 0.4.6 (March 28, 2017)

- Reduce `font-size-small` value from `0.9rem` to `0.8rem`

## 0.4.5 (March 24, 2017)

- Add `newTabIcon` config to `Icon`

## 0.4.4 (March 24, 2017)

- Set `Button`'s `margin` to `0`

## 0.4.3 (March 21, 2017)

- Update `MultipleImages` to have a `rounded` flag to set a `border-radius` on itself

## 0.4.2 (March 20, 2017)

- Add export of `MultipleImages` to `index.js`

## 0.4.1 (March 16, 2017)

- Revert color `lochmara` to `curious-blue`
- Revert color `lochmara-hover` to `denim`
- Revert color `red` to `torch-red`

## 0.4.0 (March 16, 2017)

- Add `MultipleImages`

## 0.3.0 (March 14, 2017)

- Add a11y addon

## 0.2.2 (March 8, 2017)

- Add blue color config to `Text`

## 0.2.1 (February 23, 2017)

- Add guide to our `CHANGELOG`
- Update past `CHANGELOG` updates to use present tense to keep inline with our commits

## 0.2.0 (February 23, 2017)

- Remove our icon font dependancy in replace of our new `Icon`

## 0.1.25 (February 22, 2017)

- Use `rem` over `em` since it's relative to the root font size

## 0.1.24 (February 22, 2017)

- Consistency tweaks to `Link` and `Icon`

## 0.1.23 (February 22, 2017)

- Add and use SVG `Icons`
- Add `Overlay`

## 0.1.19 (February 16, 2017)

Bring these back:

- Add `--black` as a color variable
- Make transition speed 100ms (as per Google's rail model)

## 0.1.18 (February 16, 2017)

- Add `minHeight` and `minWidth` to `Image`

## 0.1.16 (February 13, 2017)

- Add `--black` as a color variable
- Make transition speed 100ms (as per google's rail model)

## 0.1.13 (February 7, 2017)

- Add `withText` config to `Loader` to display with `Text`
- Update default config of `Loader` to display without text

## 0.1.12 (February 3, 2017)

- Make `noStyle` button cursor = pointer

## 0.1.11 (February 3, 2017)

- Added `hovered` prop to `Card`
- Remove `layout.css` file and references

## 0.1.3 (January 10, 2017)

- Remove component dependency on `typography.css`

## 0.1.2 (January 10, 2017)

- Remove `margin-bottom` from `Card`

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
