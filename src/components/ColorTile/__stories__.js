import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ColorTile from '.';
import '../../styles/common.css';

storiesOf('Components|Color Tile', module)
  .add('Green', () => {
    return (
      <div>
        <ColorTile size={20} color="#2ecc71" onClick={action('clicked')} />
      </div>
    );
  })
  .add('Red', () => {
    return (
      <div>
        <ColorTile size={20} color="#e74c3c" onClick={action('clicked')} />
      </div>
    );
  });
