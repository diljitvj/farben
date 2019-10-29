import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';

import Canvas from '.';
import '../../styles/common.css';

const store = new Store({
  color: '#1abc9c',
  control: {
    mode: 'pencil',
    option: {
      storkeWidth: 2
    }
  }
});

const handleOnChange = color => {
  store.set({ color });
  action('color change')(color);
};

storiesOf('Fragments|Canvas', module).add('Canvas', () => {
  return (
    <div>
      <State store={store}>
        {({ color, control }) => {
          return [<Canvas color={color} control={control} />];
        }}
      </State>
    </div>
  );
});
