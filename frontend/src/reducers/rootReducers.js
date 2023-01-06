import { combineReducers } from "redux";

// USER
import auth from './User/auth';
import user from './User/user';
import newUser from './User/newUser'

export default combineReducers({
    auth, user, newUser
})