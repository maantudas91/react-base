import React from 'react';

const SignupForm = ({ onSubmit }) =>{

    return (
            <form onSubmit={onSubmit} className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="First Name">First Name</label>
                    <input type="text" name="firstname" className="form-control" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Last Name">Last Name</label>
                    <input type="text" name="lastname" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="text" name="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" className="form-control"/>
                </div>

                <button type="submit" className="btn btn-dark">Signup</button>
            </form>
    );
    
}

export default SignupForm;
