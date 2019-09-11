import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';

import ColorPanel from '.';
import '../../styles/common.css';

const store = new Store({
  color: undefined
});

const handleOnChange = color => {
  store.set({ color });
  action('color change')(color);
};

storiesOf('Fragments|Panel', module).add('Color Panel', () => {
  return (
    <div>
      <State store={store}>
        {({ color }) => {
          return [<ColorPanel onChange={handleOnChange} color={color} />];
        }}
      </State>
    </div>
  );
});
