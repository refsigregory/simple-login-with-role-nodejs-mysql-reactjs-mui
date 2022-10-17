import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Dashboard from './Dashboard';

const testExample = <Dashboard />;
const testRouter  = 
<Router>
  {testExample}
</Router>;

it('renders correctly', () => {
  const tree = renderer
    .create(testRouter)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
