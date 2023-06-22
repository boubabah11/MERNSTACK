import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItemComponent from "./CartItemComponent";
import CartSummaryComponent  from "./CartSummaryComponent";

import { saveCartToDb } from"../../State/CartState/cartActions";

let CartComponent = (props)=> {

   let cartList = useSelector((state)=>state.cartReducer)

   let user = useSelector((state)=>state.userReducer.User) //if user login or not

   let navigate = useNavigate();
   let func = function(event) {      

       navigate('/checkout');
       event.preventDefault();
   }


   let recalculate = (cartItems)=>{
    let amount = 0, 
        count = 0;

    for(let item of cartItems) {
        amount += item.qty * item.price;
        count  += item.qty; 
    }

    return {
        amount, //ES6 syntactic sugar amount: amount 
        count // if key and values are same name then we can put it this way without ":"
    }
}


let dispatchCartToDB = useDispatch();

let clickToSaveCart = (cartList, userid)=>{  // Create a Function saveToCard
    if(!userid){
        alert("Please sign in  before saving the cart!!")
        navigate('/userk');
    }else{
        dispatchCartToDB(saveCartToDb(cartList, userid))
    }
}


    return(
        <Fragment>
            {props.readOnly ?"" : <h1>Cart Component</h1>}
            {cartList && cartList.length > 0 ? 
                <Fragment>
                <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                {
                                    props.readOnly ?  "" : 
                                        <Fragment>
                                            <th>Remove</th>
                                            <th>Edit</th>
                                        </Fragment>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartList.map(item=>{
                                   // return item.name
                                     return <CartItemComponent
                                                   item={item}
                                                   key={item._id}
                                                 readOnly = {props.readOnly}
                                        />
                                })
                            } 
                        </tbody>
                    </table>

                    <CartSummaryComponent data={recalculate(cartList)} readOnly={props.readOnly} />


                    {
                        props.readOnly ? <></> : 
                            <Fragment>
                                <button onClick={() => clickToSaveCart(cartList, user._id)} >
                                        Save Cart
                                </button>
                                
                                <button onClick={func} >
                                    Go To Checkout
                                </button>
                            </Fragment> 
                    }   
                </Fragment> 
                : 
                <b>Cart Is Empty!!! Please add some products.</b>}               
        </Fragment>
    )
}

export default CartComponent;

//CartComponent - fetch the cart and make it configurabale on the basis of property
//CartItemComponent - to edit the quantity
//CartSummaryComponent - show the cart summary