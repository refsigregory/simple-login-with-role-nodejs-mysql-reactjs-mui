import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import { Copyright } from './Copyrights';

it('renders correctly', () => {
  const tree = renderer
    .create(<Copyright />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders copy rights', () => {
  const { getByText } = render(
    <Copyright />
  );

  expect(getByText(/Copyright ©/i)).toBeInTheDocument();
});

test('renders My Website', () => {
  const { getByText } = render(
      <Copyright />
  );

  expect(getByText(/My Website/i)).toBeInTheDocument();
});