import React, { Component } from 'react';
import './App.css';
import {Route, Switch, Redirect } from 'react-router-dom'
import Adapter from './components/Adapter'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

import MainMenu from './components/MainMenu'
import SignUpForm from './components/SignUpForm'
import LogInForm from './components/LogInForm'
import FeesContainer from './components/fees/FeesContainer'
import InvManagement from './components/InvManagement'
import Reports from './components/Reports'
import ProductsList from './components/ProductsList'
import ProductContainer from './containers/ProductContainer'
import HomeContainer from './containers/HomeContainer'
import UpdateUser from './components/users/UpdateUser'



class App extends Component {

 
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={LogInForm}/>
          {/* <Route exact path="/signup" component={SignUpForm}/> */}
          {Adapter.isLoggedIn() ?    
          <React.Fragment>
          <MainMenu {...this.props}/> 
          <Route exact path="/products" component={ (props) => {return ( <ProductsList {...props}/> )}  }/>
          <Route path="/products/:id" component={ (props) => {return ( <ProductContainer {...props}/> )}  }/>
          <Route exact path="/invmanagement" component={ (props) => {return ( <InvManagement {...props}/> )}  }/>
          <Route exact path="/reports" component={ (props) => {return ( <Reports {...props}/> )}  }/>
          {/* <Route exact path="/fees" component={ (props) => {return ( <FeesContainer {...props}/> )}  }/> */}
          <Route exact path="/" component={ (props) => {return ( <HomeContainer {...props} />)} }/>
          <Route exact path="/profile" component={ (props) => {return ( <UpdateUser {...props} />)} }/>
           
          </React.Fragment>
          : <Redirect to="/login" /> }
          
        </ Switch>
      </div>
    );
  }
}


function mapStateToProps(state){  
  return {current_user: state.current_user}
}


function mapDispatchToProps(dispatch){
  return {
    setCurrentUser: (id) => {
      dispatch({ type: 'SET_CURRENT_USER',  payload: id })
    }
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
