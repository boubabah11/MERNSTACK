import { AddUserToStoreAction, saveUserToDB } from "../../State/UserState/userActions";
import User from "./UserComponent";
import { connect } from "react-redux";


//container based 

//to make a component subscriber it implements - mapStateToProps
let mapStateToProps = (state)=>{ //state - is store with all reducers
    return {
        User : state.userReducer.User, //User is read a props.User
        //Product : state.productReducer.ProductList
    }
}

//to make a component publisher it implements - mapDispatchToProps
let mapDispatchToProps = (dispatch)=>{//dispatch is used to take action from component to store
    return {
        addUser : (newuser)=>{//this.state - from UserComponent
            dispatch(AddUserToStoreAction(newuser))
        },
        signInUpUser : (newuser)=>{//this.state - from UserComponent
            dispatch(saveUserToDB(newuser))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(User);