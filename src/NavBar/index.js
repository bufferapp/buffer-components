import React, { PropTypes } from 'react';
import reactCSS from 'reactcss';

const NavBar = ({ children }) => {
  const styles = reactCSS({
    default: {
      NavBar: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottom: '1px solid #ced7df',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        height: 64,
        lineHeight: 64,
        marginBottom: 32,
        padding: '0 16px',
        width: '100%',
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
