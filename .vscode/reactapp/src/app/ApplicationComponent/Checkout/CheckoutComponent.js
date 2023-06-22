import React, {useState, Fragment} from "react";
import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

import Cart from "../Cart/CartComponent";


// Functional component
let CheckoutComponent = (props)=>{
    let user = useSelector((state)=>state.userReducer.User)
    let coupon = useSelector((state) => state.couponReducer.coupon);

   // const [showHide, setShowHide] = useState(false); //Initialization of state through react hook useState passing in param

      const [checkout, payment] = useState(true); //Initialization of state through react hook useState passing in param

      const paymentClick = () =>
      {
        payment(!checkout); 
      }


    let navigate = useNavigate();
    let func = function (event)
    {
        navigate('/cart');
        event.preventDefault();
    }

    return(
        <>
        {checkout ?
       
       <Fragment>

            <h1>Checkout Component</h1>
                <div>
                         Hi, <b>{user.userName}</b> 
                        <br/>
                        <h5> check Item(s) below before making payment. </h5>
                        <br/>
                        <hr/>

                        {coupon ? 
                            <p>  <b>{coupon}</b></p>
                            :<p><b>Click on  Generate for discount. </b>
                                <NavLink to="/coupon"> Click Here </NavLink>
                            </p>}
                         <hr />
                </div>

                <Cart readOnly={true} />
                <div>

                    <button onClick={paymentClick} >
                         Payment
                    </button>

                </div>

            </Fragment> : 
            <Fragment>
            <h1>Payment Page</h1>
            <div>
               <h5> Thank you for your payment! </h5>
                <hr />
            </div>
            
        </Fragment>

        }
    
        
        </>
    )


}

export default CheckoutComponent;


