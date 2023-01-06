// * IMPORT & API BASE
import axios from "axios";
import { API_BASE } from "../../config/env";

export const LOGIN_USER_PENDING = "LOGIN_USER_PENDING";
export const LOGIN_USER_FULFILLED = "LOGIN_USER_FULFILLED";
export const LOGIN_USER_REJECTED = "LOGIN_USER_REJECTED";

export const REGISTER_USER_PENDING = "REGISTER_USER_PENDING";
export const REGISTER_USER_FULFILLED = "REGISTER_USER_FULFILLED";
export const REGISTER_USER_REJECTED = "REGISTER_USER_REJECTED";

export function loginUser({emailOrNumber, password}){
    return dispatch => {
        dispatch({
            type: "LOGIN_USER",
            payload: axios.post(`${API_BASE}/users/login`, {
                emailPhone: emailOrNumber,
                password
            }).then(result => {
                if(result.data !== false){
                    if(result.data !== "NOT_FOUND"){
                        localStorage.setItem("isLogin", true);
                        localStorage.setItem("user", JSON.stringify(result.data))
                        localStorage.removeItem("redirect_type");
                        window.location.reload();
                    }
                    return result.data;
                }
            })
        })
    }
}

export function registerUser(values){
    return dispatch => {
        dispatch({
            type: "REGISTER_USER",
            payload: axios.post(`${API_BASE}/users`, {
                name: values.name,
                surname: values.surname,
                password: values.password,
                emailPhone: values.emailOrNumber,
                birthday: `${values.year}-${values.month}-${values.day}`,
                gender: parseInt(values.gender),
            }).then(result => {
                if(result.data.status !== 208){
                    localStorage.setItem("isLogin", true);
                    localStorage.setItem("user", JSON.stringify(result.data))
                    localStorage.removeItem("redirect_type");
                    setTimeout(() => {
                        return window.location.href = "/";
                    }, 1500)
                }
                return result.data;
            })
        })
    }
}