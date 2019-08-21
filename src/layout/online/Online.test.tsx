import React from 'react';
import renderer from 'react-test-renderer';
import Online from './Online';

it('renders correctly', () => {
  const tree = renderer.create(<Online />).toJSON();
  expect(tree).toMatchSnapshot();
});
