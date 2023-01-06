import {
    LOGIN_USER_PENDING,
    LOGIN_USER_FULFILLED,
    LOGIN_USER_REJECTED,

    REGISTER_USER_PENDING,
    REGISTER_USER_FULFILLED,
    REGISTER_USER_REJECTED
} from "../../actions/User/auth"

// INITIAL STATE
const initialState = {
    user: {},
    error: {},
    done: false,
    fetching: false,
}

// REDUCER
export default (state = initialState, action) => {
    switch (action.type){
        // * LOGIN USER
        case LOGIN_USER_PENDING:
            return {
                ...state,
                fetching: true,
            }
            break;
        case LOGIN_USER_FULFILLED:
            return {
                ...state,
                user: action.payload,
                fetching: false
            }
            break;
        case LOGIN_USER_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }

        // * REGISTER USER
        case REGISTER_USER_PENDING:
            return {
                ...state,
                done: false,
            }
            break;
        case REGISTER_USER_FULFILLED:
            return {
                ...state,
                user: action.payload,
                done: true,
            }
            break;
        case REGISTER_USER_REJECTED:
            return {
                ...state,
                error: action.payload,
                done: false,
            }
            break;
        default:
            return state;
    }
}