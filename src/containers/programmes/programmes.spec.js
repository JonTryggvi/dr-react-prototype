import React from 'react';
import { shallow } from 'enzyme';
import Home from './programmes.jsx';
import MainButton from '../../components/main-button/main-button';
it('renders without crashing', () => {
  shallow(<Programmes/>);
});
