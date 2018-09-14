import React, { Component } from 'react';
import SignupForm from '../components/SignupForm';
import { withRouter } from 'react-router'
import { auth } from '../services/UserService';
import ErrorMsg from '../components/ErrorMsg';
import SucMsg from '../components/SucMsg';

class Signup extends Component {

    constructor(props){
        super(props);
        this.state = { registerError: null, registerSuc:null }
        this.signupFormSubmit = this.signupFormSubmit.bind(this);
        //this.resetForm = this.resetFormCallback.bind(this);
    }

    setErrorMsg(error) {
        return {
          registerError: error.message,
          registerSuc : null
        }
    }

    setSucMsg(sucmsg){
        return {
            registerError : null,
            registerSuc : sucmsg
        }
    }

    signupFormSubmit(event){
        event.preventDefault();
        const { firstname, lastname, email, password } = event.target.elements;
        auth(email.value, password.value, firstname.value, lastname.value)
                .then(user => this.setState(this.setSucMsg("Congrats!! You rgistered successfully.")))
                .catch(e => this.setState(this.setErrorMsg(e)))
    }

  

    render() {
        const {registerError, registerSuc } = this.state;
        return (
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Signup</div>
                        <div className="card-body">
                            { 
                                registerError &&
                                <ErrorMsg msg={registerError}/>
                            }

                            { 
                                registerSuc &&
                                <SucMsg msg={registerSuc}/>
                            }
                            
                            <SignupForm onSubmit={this.signupFormSubmit} />
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Signup);
