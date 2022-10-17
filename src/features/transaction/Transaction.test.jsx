import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Transaction from './Transaction';

const testExample = <Transaction />;
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
