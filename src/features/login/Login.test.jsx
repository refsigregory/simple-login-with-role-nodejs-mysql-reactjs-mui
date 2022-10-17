import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './../../app/store';
import Login from './Login';

const testExample = <Login />;
const testRouter  = 
<Provider store={store}>
  <Router>
    {testExample}
  </Router>
</Provider>;

it('renders correctly', () => {
  const tree = renderer
    .create(testRouter)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
