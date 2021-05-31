import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.emailInputRef=React.createRef();
        this.passwordInputRef=React.createRef();
    }
    render() {
        return (
            <form className="login-form">
                <span className="login-signup-header">Log In</span>
                <div className="field">
                    <input type="email" placeholder="Email" ref={this.emailInputRef} required />
                </div>
                <div className="field">
                <input type="password" placeholder="Password" ref={this.passwordInputRef} required />

                </div>
                <div className="field">
                    <button>Log In</button>
                </div>
            </form>
        );
    }
}

export default Login;