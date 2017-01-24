import React, { PropTypes } from 'react';
import reactCSS from 'reactcss';
import Icon from '../Icon';
import Text from '../Text';

const NavBar = ({ title, subtitle }) => {
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
        backgroundColor: '#fff',
        borderBottom: '1px solid #ced7df',
        boxSizing: 'border-box',
      },
      AppIcon: {
        marginRight: 8,
        display: 'flex',
      },
    },
  });
  return (
    <div
      style={styles.NavBar}
    >
      <div
        style={styles.AppIcon}
      >
        <Icon
          type={'buffer'}
          height={15}
          width={15}
        />
      </div>
      <Text weight={'bold'}>{title}</Text>
      <Text>{subtitle ? `\u00a0${subtitle}` : ''}</Text>
    </div>
  );
};

NavBar.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

NavBar.defaultProps = {
  title: 'Buffer',
};

export default NavBar;
