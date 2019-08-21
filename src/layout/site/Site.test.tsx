import React from 'react';
import ReactDOM from 'react-dom';
import Site from './Site';

describe('Site', () => {
  beforeEach(() => {
    (global as any).IntersectionObserver = class IntersectionObserver {
      constructor() {}
      observe() { return null }
      unobserve() { return null }
    };
    HTMLCanvasElement.prototype.getContext = jest.fn();
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Site />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})
