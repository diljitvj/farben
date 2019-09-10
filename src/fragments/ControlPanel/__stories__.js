import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ControlPanel from '.';
import '../../styles/common.css';

storiesOf('Fragments|Panel', module).add('Control Panel', () => {
  return (
    <div>
      <ControlPanel
        onChange={action('color change')}
        activeControl={{ mode: 'pencil', option: { storkeWidth: 2 } }}
      />
    </div>
  );
});
