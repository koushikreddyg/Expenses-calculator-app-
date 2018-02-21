import {LoginPage} from '../../components/LoginPage';
import React from 'react';
import {connect} from 'react-redux';
import {shallow} from 'enzyme';

test('test Login page',()=>{
const wrapper=shallow(<LoginPage startLogin={(()=>{})}/>);
    expect(wrapper).toMatchSnapshot()
})
test('test login page to have been called with props',()=>{
    const startLogin=jest.fn();
const wrapper=shallow(<LoginPage startLogin={startLogin}/>)
wrapper.find('button').simulate('click');
expect(startLogin).toHaveBeenCalled()
})