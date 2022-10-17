import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import { DashboardComponent } from './DashboardComponent';

const testExample = <DashboardComponent title='Test' component={<React.Fragment>Test</React.Fragment>} />;
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
