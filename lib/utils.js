export const calcActiveStyles = (styleSwitches = {}) => {
  const activeStyles = ['default'];
  Object.keys(styleSwitches).forEach((styleKey) => {
    if (styleSwitches[styleKey]) {
      activeStyles.push(styleKey);
    }
  });
  return activeStyles;
};

export const mergeStyles = (styles = []) =>
  styles.reduce((p, c) => ({
    ...p,
    ...c,
  }), {});

export const calculateStyles = (styles = {}, switches) => {
  if (!styles.default) {
    throw new Error('missing `default` style');
  }
  const activeStyles = calcActiveStyles(switches)
    .map((activeStyle) => {
      if (!(activeStyle in styles)) {
        throw new Error(`style \`${activeStyle}\` is not an available style`);
      }
      return styles[activeStyle];
    });
  return mergeStyles(activeStyles);
};
