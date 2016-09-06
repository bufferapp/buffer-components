import React, { PropTypes } from 'react';
import reactCSS from 'reactcss';

const NavBar = ({ children }) => {
  const styles = reactCSS({
    default: {
      NavBar: {
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        marginBottom: 32,
        padding: '0 16px',
        width: '100%',
        height: 64,
        lineHeight: 64,
        backgroundColor: '#fff',
        borderBottom: '1px solid #ced7df',
        boxSizing: 'border-box',
      },
    },
  });
  return (
    <div
      style={styles.NavBar}
    >
      {children}
    </div>
  );
};

NavBar.propTypes = {
  children: PropTypes.node,
};

export default NavBar;
