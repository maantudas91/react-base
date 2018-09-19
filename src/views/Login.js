import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { login } from '../services/UserService';
import LoginForm from '../components/LoginForm';
import ErrorMsg from '../components/ErrorMsg';
import SucMsg from '../components/SucMsg';
import { connect } from 'react-redux';
import { loginSuccess } from '../rdx/actions/AuthActions';
import { Route, Redirect } from 'react-router-dom'


class Login extends Component {

    constructor(props){
        super(props);
        console.log(this.props);
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
                .then( res => { 
                    this.props.dispatch(loginSuccess(res));
                    const {location} = this.props;
                    if(location.state && location.state.from) {
                        this.props.history.push(location.state.from);
                    } else {
                        this.props.history.push('/');
                    }
                })
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
        const {user, location} = this.props;
        return (
            
                (user.isLoggedin && location.state && location.state.from)
                    ? <Redirect  push to={location.state.from}
            /> : (user.isLoggedin) 
                ? 
                <Redirect  push to="/" />
            :
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

const mapStateToProps = (state) => {
    return { 
        user: state.auth,
        location: state.router.location
    };
};
export default withRouter(connect(mapStateToProps)(Login));
