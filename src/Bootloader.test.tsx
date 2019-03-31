import React from 'react';
import ReactDOM from 'react-dom';
import Bootloader from './Bootloader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bootloader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
