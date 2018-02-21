import authReducer from '../../reducers/auth';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {login,logout} from '../../actions/auth';
const mockStore=createMockStore([thunk]);

test('should set uid for login',()=>{
    const store=mockStore({});
    const uid=122;
    
    const actions=login(uid);
    expect(actions).toEqual({
        type:'LOGIN',
        uid:122
    })
})
test('',()=>{
    const actions=logout()
    expect(actions).toEqual({
        type:'LOGOUT',
        
    })    

})