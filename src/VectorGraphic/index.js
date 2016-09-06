import React, { PropTypes } from 'react';

const VectorGraphic = ({ children, height, width, viewWidth, viewHeight }) => {
  if (!viewWidth) {
    viewWidth = width;
  }
  if (!viewHeight) {
    viewHeight = height;
  }
  return (
    <svg
      height={height}
      version={'1.1'}
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      width={width}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      {children}
    </svg>
  );
};


VectorGraphic.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  viewHeight: PropTypes.number,
  viewWidth: PropTypes.number,
};

export default VectorGraphic;
