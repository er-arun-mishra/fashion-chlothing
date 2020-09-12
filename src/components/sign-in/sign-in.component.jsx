import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.util';

import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        };
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'',password:''});
    }

    handleChange = event =>{
        const { value, name } = event.target;

        this.setState({ [name]:value });
    }
    render(){
        return(
            <div className ='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        name = 'email' 
                        type='email' 
                        handleChange={this.handleChange} 
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput 
                        name = 'password' 
                        type='password' 
                        handleChange={this.handleChange} 
                        value={this.state.password} 
                        label = 'password'
                        required
                    /> 
                    <div className='buttons'>
                    <CustomButton type='submit' value = 'submit form'>Sign In</CustomButton>
                    <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;