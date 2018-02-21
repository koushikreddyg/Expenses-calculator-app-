import React from 'react';
import { shallow } from 'enzyme';
import {Header} from '../../components/Header';


test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={()=>{}}/>);
  expect(wrapper).toMatchSnapshot();
});
test('should render button when button is clicked',()=>{
  const startLogout1=jest.fn();
  const wrapper=shallow(<Header startLogout={startLogout1}/>)
  wrapper.find('button').simulate('click');
  expect(startLogout1).toHaveBeenCalled()
})