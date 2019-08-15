import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import Site from './Site';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Site />, div);
  ReactDOM.unmountComponentAtNode(div);
});
