import React, { Component } from 'react';
import { withFormsy } from 'formsy-react';

class FormInput extends Component {

    render() {
        return (
            <React.Fragment>
                <span>{this.props.label} {this.props.isRequired() ? '*' : null}</span>
                <input className="form-control" value={this.props.getValue() || ''} onChange={(e) => this.props.setValue(e.target.value)}/>
                <span>{this.props.getErrorMessage()}</span>
            </React.Fragment>
        );
    }
}

export default withFormsy(FormInput);
