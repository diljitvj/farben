import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ColorPanel from '.';
import '../../styles/common.css';

storiesOf('Fragments|Color Panel', module).add('Panel', () => {
  return (
    <div>
      <ColorPanel onChange={action('color change')} />
    </div>
  );
});
