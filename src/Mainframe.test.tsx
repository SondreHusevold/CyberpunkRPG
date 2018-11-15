import React from 'react';
import ReactDOM from 'react-dom';
import Mainframe from './Mainframe';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Mainframe />, div);
  ReactDOM.unmountComponentAtNode(div);
});
