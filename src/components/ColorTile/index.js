import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';

const ColorTile = ({ color, size, onClick }) => {
  console.log(size);
  return (
    <div
      onClick={onClick}
      className={styles.tile}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color
      }}
    ></div>
  );
};

ColorTile.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number,
  onClick: PropTypes.func
};

ColorTile.defaultProps = {
  color: '#000000',
  size: 15,
  onClick: () => {}
};

export default ColorTile;
