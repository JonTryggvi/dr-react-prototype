import React from 'react';
import { shallow } from 'enzyme';
import Programme from './programme.jsx';

it('renders without crashing', () => {
  shallow(<Programme/>);
});
