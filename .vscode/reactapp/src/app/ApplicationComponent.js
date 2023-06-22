import React, { Component, PureComponent, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";


import Home from "./Common/HomeComponent";
import Header from "./Common/HeaderComponent";
import Footer from "./Common/FooterComponent";
import { ChildComp } from "./Common/ChildComponent";
import About from "./Common/AboutComponent";
import NotFound from "./Common/NotFoundPage";
//import User from "./ApplicationComponent/UserComponent";
//import User from "./ApplicationComponent/User/UserContainer";
import UserHook from "./ApplicationComponent/User/UserHook";
import ProductComponent from "./ApplicationComponent/Product/ProductComponent";
import DisplayProduct from "./ApplicationComponent/Product/DisplayProduct";
import CartComponent from "./ApplicationComponent/Cart/CartComponent";
import CheckoutComponent from "./ApplicationComponent/Checkout/CheckoutComponent";
import CouponComponent from "./ApplicationComponent/Coupon/CouponComponent";

export default class Application extends Component {
    constructor(props){ //props is read only object is used to share info from one comp to another
        super(props);
        this.User = {
            Name : "Tien",
            Age : 19
        }
    }

    render(){
        return(
            <Router>
                
                <Header />
                
                <Routes>
                    <Route path="/" element={<Navigate replace to={"/user"} />}/>
                    <Route path="/home" element={<Home user={this.User} userName={"Boubacar"}/>}/>
                   {/*<Route path="/user" element={<User/>} /> */}
                    <Route path="/product" element={<ProductComponent/>} />
                    <Route path="/cart" element={<CartComponent/>} />
                    <Route path="/display" element={<DisplayProduct/>} /> 
                    <Route path="/userk" element={<UserHook/>} />
                    <Route path="/checkout" element={<CheckoutComponent readOnly={true}/>} />
                    <Route path="/coupon" element={<CouponComponent/>} />
                    <Route path="/about" element={<About />}/>
                    <Route path="/about/:id" element={<About />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
                
                <Footer />
            </Router>
        )
    }
}

export const pi = 3.14;

//component - is a functional class/function which does single/multiple things independently

// const Application = ()=>{

//     let name = "Awsome React!!!"

//     //return the UI or virtual dom, only one top level parent is allowed
//     //JSX- javascript like xml structure
//     //class/home/header/footer/about/notfound/product/cart/...etc
//     return(
//         <>
//             <div>
//                 <h2>Application Component</h2>
//             </div>
//             <div>
//                 <b><i>{name}</i></b>
//             </div>
//         </>
//     )
// }

// export default Application;

//create your own component with your name and export it as default then named and then with some other exports