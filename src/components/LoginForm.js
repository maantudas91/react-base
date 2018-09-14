import React, { Component } from 'react';
import Formsy from 'formsy-react';
import FormInput from '../components/form-components/FormInput';


class LoginForm extends Component {

    constructor(props){
        super(props);
        console.log(props)
    }
    render() {

        let { submit, enableButton, disableButton } = this.props;
        return (
            <Formsy onValidSubmit={submit} onValid={enableButton} onInvalid={disableButton} className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="Username">Username / Email</label>
                    <FormInput 
                        name="email"
                        validations="isEmail"
                        validationError="This is not an email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <FormInput 
                        name="password"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-dark"  disabled={!this.props.canSubmit}>Login</button>
            </Formsy>
        );
    }
}

export default LoginForm;
