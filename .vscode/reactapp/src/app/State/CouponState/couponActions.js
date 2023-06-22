import * as actionTypes from "../actionTypes";

// Coupon action
export const generateCoupon = (coupon) => ({
    
    type : actionTypes.GENERATE_COUPON,
    payload : coupon
    
});