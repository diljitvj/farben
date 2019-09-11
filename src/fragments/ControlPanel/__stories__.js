import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ControlPanel from '.';
import '../../styles/common.css';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  control: {
    mode: 'erase',
    option: { eraseRadius: 2 }
  }
});

const handleOnChange = control => {
  store.set({ control });
  action('contol change')(control);
};

storiesOf('Fragments|Panel', module).add('Control Panel', () => {
  return (
    <div>
      <State store={store}>
        {({ control }) => {
          return [
            <ControlPanel
              key="one"
              onChange={handleOnChange}
              activeControl={control}
            />
          ];
        }}
      </State>
    </div>
  );
});
