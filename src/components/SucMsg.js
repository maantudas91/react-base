import React from 'react';

const SucMsg = (props) =>{
    let {msg} = props;
    return (
        
        <div className="alert alert-success" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span className="sr-only">Success:</span>
            &nbsp;{msg}
        </div>
    );
}

export default SucMsg;
