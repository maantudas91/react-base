import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../constants/ActionTypes";

const initialState = {
    isLoggedin : false,
    user : null
}

export default (state = initialState, action) => {

    switch(action.type){
        case LOGIN_SUCCESS:
            let { uid,displayName,email,emailVerified,phoneNumber,photoURL } = action.payload;
            const user = Object.assign({}, action.payload);
            return {...state, isLoggedin : true, user : user}

        case LOGOUT_SUCCESS:
            return initialState;

        default:
            return state;    
    }
}
