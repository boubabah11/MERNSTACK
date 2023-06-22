import * as actionTypes from "../actionTypes";

const initialState = {
    User : { 
        userName : "",
        password : "",
        street : "",
        mobile : 0,
        _id: ""
    }
}

const userReducer = (state=initialState, action)=>{

    console.log("We are in user reducer with action payload - ", action.payload)

    switch (action.type) {

        case actionTypes.AddUserToStore:
            return {...state, User : action.payload} //action.payload is new user that we need do return in newstate
    
        default:
            return state;
            break;
    }
}

export default userReducer;