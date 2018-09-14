import React from 'react';

const ErrorMsg = (props) =>{
    let {msg} = props;
    return (
        
        <div className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span className="sr-only">Error:</span>
            &nbsp;{msg}
        </div>
    );
}

export default ErrorMsg;
