import React, { Component } from 'react';
import {connect} from 'react-redux';
import { signup, startSignup } from '../actions/auth';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password:'',
            confirmPassword:'',
            name:'',
        };
    }
    handleInputChange= (field,value)=>{
        this.setState({
            [field]:value,
        });
    };
    onFormSubmit = (e)=>{
        e.preventDefault();
        const {email,password, confirmPassword , name} = this.state;

        if(email && password && confirmPassword && name){
            this.props.dispatch(startSignup());
            this.props.dispatch(signup(email,password,confirmPassword,name));
        }
    };
    render() {
        const { inProgress,error } = this.props.auth;
        return (
            <form className="login-form">
                <span className="login-signup-header">Sign Up</span>
                {error && <div className="alert error-dailog">{error}</div>}
                <div className="field">
                    <input type="text"
                     placeholder="Name"
                     required
                     onChange={(e)=> this.handleInputChange('name',e.target.value)}  
                    />
                </div>
                <div className="field">
                    <input type="email"
                     placeholder="Email"
                     required
                     onChange={(e)=> this.handleInputChange('email',e.target.value)} 
                    />
                </div>
                <div className="field">
                <input type="password"
                 placeholder="Password"
                 required
                 onChange={(e)=> this.handleInputChange('password',e.target.value)} 
                />
                </div>
                <div className="field">
                <input type="password"
                 placeholder="Confirm-Password"
                 required
                 onChange={(e)=> this.handleInputChange('confirmPassword',e.target.value)}  
                />
                </div>
                <div className="field">
                    <button onClick={this.onFormSubmit} disabled={inProgress}>Sign Up</button>
                </div>
            </form>
        );
    }
}
const mapStateTOProps = ({auth})=>({
    auth,
})

export default connect(mapStateTOProps)(SignUp);