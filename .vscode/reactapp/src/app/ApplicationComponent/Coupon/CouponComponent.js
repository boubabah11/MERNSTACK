import React,{ useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";

import { generateCoupon } from "../../State/CouponState/couponActions";

// Functional Component
let CouponComponent = (props) =>
{
    let coupon = useSelector((state) => state.couponReducer.coupon)
    let user = useSelector((state)=>state.userReducer.User) //if user login or not

    let dispatchCoupon = useDispatch(); // Hook to dispatch - send to store/reducer

      const [code, setCode] = useState(null)

    let generateCouponClick = ()=>{

        let min = 100000;
        let max = 999999;
        setCode(Math.round(Math.random() * (max - min) + min))
        dispatchCoupon(generateCoupon(coupon));
    }

    
    let navigate = useNavigate();
    let func = function(event)
    {
        navigate('/checkout');
        event. preventDefault;
    }
    

    return(
        <>
            <h1> Generate Coupon </h1>
            <div className="col-md-8">
                <div className="col-md-12">
                    <b>Hi, {user.userName != "" ? user.userName: ""}</b>
                    {coupon ?                    
            
                    <b>{coupon}</b> : 
                    <p>Click here to Generate Coupon</p>
                    }
        
                </div> 
                
                <button onClick={generateCouponClick} >GENERATE 15% OFF ORIGINAL PRICE</button>
                <p>{code}</p>
                <button onClick={func}>Go To Checkout</button>
                
            </div>
              
        </>
    )
}
export default CouponComponent;