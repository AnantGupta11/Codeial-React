
import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearAuthState, login } from '../actions/auth';
// import auth from '../reducers/auth';

class Login extends Component {
    constructor(props){
        super(props);
        // this.emailInputRef=React.createRef();
        // this.passwordInputRef=React.createRef();
        this.state={
            email:'',
            password:''
        };
    }
    componentWillUnmount() {
        this.props.dispatch(clearAuthState());
    }
    
    handleEmailChange=(e)=>{
        // console.log(e.target.value);
        this.setState({
            email:e.target.value
        })
    }
    handlePasswordChange=(e)=>{
        // console.log(e.target.value);
        this.setState({
            password:e.target.value
        })
    }
    handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log('this.state',this.state);
        // console.log('this.emailInputRef',this.emailInputRef);
        // console.log('this.passwordInputRef',this.passwordInputRef);
        const { email,password } = this.state;
        if(email && password){
            this.props.dispatch(login(email,password));
        }
    };
    render() {
        const { error, inProgress, isLoggedIn } = this.props.auth;
        if(isLoggedIn){
            return <Redirect to="/"/>;
        }
        return (
            <form className="login-form">
                <span className="login-signup-header">Log In</span>
                {error && <div className="alert error-dailog">{error}</div>}
                <div className="field">
                    <input type="email" 
                           placeholder="Email" 
                           //ref={this.emailInputRef} 
                           onChange={this.handleEmailChange}
                           value={this.state.email}
                           required 
                    />
                </div>
                <div className="field">
                <input type="password"
                       placeholder="Password" 
                       //ref={this.passwordInputRef}
                       onChange={this.handlePasswordChange}
                       value={this.state.password} 
                       required 
                />

                </div>
                <div className="field">
                    {inProgress ? 
                     (<button onClick={this.handleFormSubmit} disabled={inProgress}>Logging in...</button>):
                     (<button onClick={this.handleFormSubmit} disabled={inProgress}>Log In</button>)
                    }
                </div>
            </form>
        );
    }
}

function mapStateToProps (state){
    return {
        auth: state.auth,
    };
}
export default connect(mapStateToProps)(Login);