import React, { PropTypes } from 'react';
import reactCSS from 'reactcss';

const Text = ({ children, color, size, weight }) => {
  const styles = reactCSS({
    default: {
      Text: {
        fontSize: size,
        color,
        fontFamily: '"Open Sans", sans-serif',
        fontWeight: weight,
      },
    },
  });
  return (
    <span style={styles.Text}>{children}</span>
  );
};

Text.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Text.defaultProps = {
  size: 14,
  weight: 400,
};

export default Text;
