import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './Root';

const root = document.querySelector('#root');

const mount = (RootComponent) => {
  render(
    <AppContainer>
      <RootComponent />
    </AppContainer>,
    root
  );
};

mount(Root);
