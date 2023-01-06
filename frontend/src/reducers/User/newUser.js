import {
    UPDATE_USER_PENDING,
    UPDATE_USER_FULFILLED,
    UPDATE_USER_REJECTED,

    NEW_PASSWORD_PENDING,
    NEW_PASSWORD_FULFILLED,
    NEW_PASSWORD_REJECTED
} from "../../actions/User/newUser"

const initialState = {
    user: {},
    error: {},
    done: false,
    fetching: false
}

export default (state = initialState, action) => {
    switch (action.type){
        // TODO: UPDATE_USER
        case UPDATE_USER_PENDING:
            return {
                ...state,
                done: false,
                fetching: true
            }
            break;
        case UPDATE_USER_FULFILLED:
            return {
                ...state,
                user: action.payload,
                done: true,
                fetching: false,
            }
            break;
        case UPDATE_USER_REJECTED:
            return {
                ...state,
                error: action.payload,
                done: true,
                fetching: false
            }
            break;

        // TODO: NEW_PASSWORD
        case NEW_PASSWORD_PENDING:
            return {
                ...state,
                fetching: true
            }
            break;
        case NEW_PASSWORD_FULFILLED:
            return {
                ...state,
                user: action.payload,
                fetching: false
            }
            break;
        case NEW_PASSWORD_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }
            break;
        default:
            return state;
    }
}