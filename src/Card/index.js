import React, { PropTypes } from 'react';
import reactCSS from 'reactcss';

const Card = ({ children, empty, noBorder }) => {
  const style = reactCSS({
    default: {
      Card: {
        backgroundColor: '#fff',
        border: '1px solid #ced7df',
        borderRadius: 2,
        padding: 16,
      },
    },
    empty: {
      Card: {
        borderStyle: 'dashed',
      },
    },
    noBorder: {
      Card: {
        border: 0,
      },
    },
  }, {
    empty,
    noBorder,
  });
  return (
    <div
      style={style.Card}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  empty: PropTypes.bool,
  noBorder: PropTypes.bool,
};

export default Card;
