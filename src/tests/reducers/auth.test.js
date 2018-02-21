import authReducer from '../../reducers/auth';


test('should set uid for login',()=>{
    
    const uid= 233;
    const action={
        type:'LOGIN',
        uid: uid,
    }   
    const Reducer=authReducer({},action);
    expect(Reducer.uid).toEqual(action.uid) 
})
test('',()=>{
    const action={
        type:'LOGOUT'
    }
const Reducer=authReducer({},action)
expect (Reducer).toEqual({})
})