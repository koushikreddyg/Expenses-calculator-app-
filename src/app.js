import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
//import promises from './playground/promises'; 
import LoginPage from './components/LoginPage';
const store = configureStore();
<LoginPage/>

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered=false;
const renderApp=()=>{
  if(!hasRendered){
    return  ReactDOM.render(jsx, document.getElementById('app'));
  }
    
     hasRendered=true
}
//setStartExpenses should return expenses
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    console.log('uid', user.uid)
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(()=>{
      //ReactDOM.render(jsx, document.getElementById('app'));
      renderApp();
      if(history.location.pathname==='/'){
        history.push('/dashboard')
      }
     
    })
  } else {
    store.dispatch(logout());
    history.push('/')
    renderApp();
  }
})

