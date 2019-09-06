import React from 'react';
import { storiesOf } from '@storybook/react';

import ColorTile from '.';
import '../../styles/common.css';

storiesOf('Components/Color Tile', module)
  .add('Green', () => {
    return (
      <div>
        <ColorTile size={20} color="#2ecc71" />
        <br />
        <ColorTile size={40} color="#2ecc71" />
        <br />
        <ColorTile size={60} color="#2ecc71" />
      </div>
    );
  })
  .add('Red', () => {
    return (
      <div>
        <ColorTile size={20} color="#e74c3c" />
        <br />
        <ColorTile size={40} color="#e74c3c" />
        <br />
        <ColorTile size={60} color="#e74c3c" />
      </div>
    );
  });
