import * as actionTypes from "../actionTypes";

const INITIAL_STATE =
{
    coupon : ""
}

export default function couponReducer(state=INITIAL_STATE, action)
{
    console.log("we are on file coupon reducer", action);
    

    switch(action.Type)
    {
        case (actionTypes.GENERATE_COUPON) :

        return {...state, coupon : action.payload};

        default:
            return state
    }
}