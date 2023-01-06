import {
    FETCH_USER_PENDING,
    FETCH_USER_FULFILLED,
    FETCH_USER_REJECTED
} from '../../actions/User/user'

const initialState = {
    user: {},
    error: {},
    fetching: false,
}

export default (state = initialState, action) => {
    switch (action.type){
        case FETCH_USER_PENDING:
            return {
                ...state,
                fetching: true,
            }
            break;
        case FETCH_USER_FULFILLED:
            return {
                ...state,
                user: action.payload,
                fetching: false,
            }
            break;
        case FETCH_USER_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }
            break;
        default:
            return state;
    }
}