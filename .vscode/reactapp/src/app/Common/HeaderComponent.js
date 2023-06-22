import React from "react";
import { NavLink, useNavigate } from "react-router-dom";//hoooks for navigations
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";

let Header = (props)=>{

    //using connect and mapStateToProps
    let userName = props.User.userName; //it is available as props as we are returning from mapSateToProps

    //by using useSelector hook
    let password = useSelector((state)=>state.userReducer.User.password) //it is mapping store as props

    let navigate = useNavigate(); // To navigate user on other page

    let func = function (evt) 
    {
        navigate("/about/2023")
        evt.preventDefault();
    }

    return(
        <>
             Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
            {userName == "" ?<b> Please Login to see other features</b>:""}
             <h2>Password is : {password}</h2> 
            <div>
                <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink> 
                <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
                {/* <NavLink to="/user" className="button" activeclassname="success" >{userName == "" ? "Login" : "User" </NavLink>  */}
                <NavLink to="/userk" className="button" activeclassname="success" >{userName == "" ? "Login" : "User"} </NavLink>
                {userName &&
                    <React.Fragment>

                <NavLink to="/product" className="button" activeclassname="success" >Product </NavLink> 
                <NavLink to="/cart" className="button" activeclassname="success" >Cart </NavLink>
                <NavLink to="/checkout" className="button" activeclassname="success" >Checkout </NavLink>

                    </React.Fragment>
                }   
            </div>

            {/* <button onClick={goToAboutClick} >Go To About Page</button> */}
        </>
    )
}


Header.propTypes = {
    headerTitle : PropTypes.string.isRequired
}

//to make a component subscriber it implements - mapStateToProps
let mapStateToProps = (state)=>{ //state - is store with all reducers
    return {
        User : state.userReducer.User, //User is read a props.User
        //Product : state.productReducer.ProductList
    }
}

//to make a component publisher it implements - mapDispatchToProps
// let mapDispatchToProps = (dispatch)=>{
//     return {
//         User : state.userReducer.User
//     }
// }


export default connect(mapStateToProps, null)(Header);

// export let Header2 = (props)=>{
//     return(
//         <>
//             <h1>This is header 2 Component</h1>
//         </>
//     )
// }