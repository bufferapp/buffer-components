import React, { PropTypes } from 'react';
import reactCSS from 'reactcss';

const Text = ({ children, color }) => {
  const styles = reactCSS({
    default: {
      Text: {
        color,
      },
    },
  });
  return (
    <p style={styles.Text}>{children}</p>
  );
};

Text.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
};

export default Text;
