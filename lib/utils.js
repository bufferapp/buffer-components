// Inspired by: https://github.com/JedWatson/classnames
const hasOwn = {}.hasOwnProperty;

export const classNames = (styles, ...args) => {
  const styleKeys = args.reduce((classes, arg) => {
    const argType = typeof arg;
    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      classes = classes.concat(arg);
    } else if (argType === 'object') {
      Object.keys(arg).forEach((key) => {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      });
    }
    return classes;
  }, []);
  return [...new Set(styleKeys)].map(key => styles[key]).join(' ');
};

export const cleanProps = (props, propTypes) =>
  Object.keys(props).reduce((clean, prop) => {
    if (!(prop in propTypes)) {
      clean[prop] = props[prop];
    }
    return clean;
  }, {});
