import React from 'react';

import styles from './style.module.css';
import ColorTile from '../../components/ColorTile';

const COLORS = [
  '#1abc9c',
  '#2ecc71',
  '#3498db',
  '#9b59b6',
  '#34495e',
  '#f1c40f',
  '#e67e22',
  '#e74c3c',
  '#ecf0f1',
  '#95a5a6'
];

const ColorPanel = ({ onChange }) => (
  <div className={styles.wrapper}>
    {COLORS.map(color => (
      <ColorTile size={40} color={color} onClick={onChange} />
    ))}
  </div>
);

export default ColorPanel;
