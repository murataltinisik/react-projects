import axios from "axios";
import { API_BASE } from "../../config/env";

export const FETCH_USER_PENDING = "FETCH_USER_PENDING";
export const FETCH_USER_FULFILLED = "FETCH_USER_FULFILLED";
export const FETCH_USER_REJECTED = "FETCH_USER_REJECTED";

export function fetchUser(id){
    return dispatch => {
        dispatch({
            type: "FETCH_USER",
            payload: axios.get(`${API_BASE}/users/${id}`)
                .then(result => {
                    localStorage.setItem("user", JSON.stringify(result.data))
                    return result.data;
                })
        })
    }
}