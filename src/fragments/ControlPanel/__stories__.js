import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ControlPanel from '.';
import '../../styles/common.css';

storiesOf('Fragments|Panel', module).add('Control Panel', () => {
  return (
    <div>
      <ControlPanel
        onChange={action('control change')}
        activeControl={{ mode: 'erase', option: { eraseRadius: 2 } }}
      />
    </div>
  );
});
