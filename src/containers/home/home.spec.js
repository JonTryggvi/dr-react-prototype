import React from 'react';
import { shallow } from 'enzyme';
import Home from './home.jsx';
import MainButton from '../../components/main-button/main-button';
it('renders without crashing', () => {
  shallow(<Home/>);
});
