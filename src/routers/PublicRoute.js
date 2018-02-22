import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
const PublicRoute =({
    isAuth,
    component:Component,
    rest
})=>(
    <div>
    <Route {...rest} component={(props)=>(
        isAuth?(<Redirect to='/dashboard'/>):
        (<Component {...props} />)
    )}/>
    </div>
)
const mapDispatchToProps=(state)=>({
    isAuth:!!state.auth.uid,
})
export default connect(mapDispatchToProps)(PublicRoute);