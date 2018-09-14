import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { login } from '../services/UserService';
import LoginForm from '../components/LoginForm';
import ErrorMsg from '../components/ErrorMsg';
import SucMsg from '../components/SucMsg';

class Login extends Component {

    constructor(props){
        super(props);
        console.log(this.props.match);
        this.state = { canSubmit: false,  loginError: null, loginSuc:null  };
        this.submit = this.submit.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
    }
    
    enableButton() {
        this.setState({
          canSubmit: true
        });
    }
      
    disableButton() {
        this.setState({
          canSubmit: false
        });
    }

    submit(model) {
        login(model.email, model.password)
                .then( res => console.log(res))
                .catch( err => this.setState(this.setErrorMsg(err)));
    }


    setErrorMsg(error) {
        return {
          loginError: error.message,
          loginSuc : null
        }
    }

    setSucMsg(sucmsg){
        return {
            loginError : null,
            loginSuc : sucmsg
        }
    }

    render() {
        const {loginError, loginSuc } = this.state;
        return (
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            { 
                                loginError &&
                                <ErrorMsg msg={loginError}/>
                            }

                            { 
                                loginSuc &&
                                <SucMsg msg={loginSuc}/>
                            }
                            <LoginForm 
                                {...this.state} 
                                submit={this.submit} 
                                enableButton={this.enableButton} 
                                disableButton ={this.disableButton}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
