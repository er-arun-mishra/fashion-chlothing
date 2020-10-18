import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.componenet';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { setCurrentUser} from './redux/user/user.action';

class App extends React.Component{
  // NOTE CONSTRUCTOR AND COMPONENTDIDMOUNT METHOD THAT IS COMMENTED USES THE NAIVE APPROACH OF SETTING STATE (this.setState) AND NOT REDUX 
  // constructor(){
  //   super();

  //   this.state ={
  //     currentUser : null
  //   };
  // }
  
  unsubscribeFromAuth = null;

  // componentDidMount(){
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
  //     if(userAuth){
  //       const userRef = await createUserProfileDocument(userAuth);
  //       userRef.onSnapshot( snapshot => {
  //         console.log(snapshot.data());
  //         this.setState({
  //           currentUser:{
  //             id:snapshot.id,
  //             ...snapshot.data()
  //           }
  //         });
  //       });
  //       console.log(this.state);
  //     }else{
  //       this.setState({
  //         currentUser: null
  //       });
  //     }
        
  //     }
  //   )
  // }

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapshot => {
          console.log(snapshot.data());
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            });
        });
        console.log(this.state);
      }else{
        setCurrentUser(userAuth);
      }
        
      }
    )
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
        <Route/>
      </Switch>

      {/* <HomePage></HomePage> */}
  </div>
  }

}

const matchDispatchToProps = dispatch => ({
    setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(null, matchDispatchToProps)(App);
