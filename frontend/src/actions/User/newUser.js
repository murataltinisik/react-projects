import axios from "axios";
import { API_BASE } from "../../config/env";

export const UPDATE_USER_PENDING = "UPDATE_USER_PENDING";
export const UPDATE_USER_FULFILLED = "UPDATE_USER_FULFILLED";
export const UPDATE_USER_REJECTED = "UPDATE_USER_REJECTED";

export const NEW_PASSWORD_PENDING = "NEW_PASSWORD_PENDING";
export const NEW_PASSWORD_FULFILLED = "NEW_PASSWORD_FULFILLED";
export const NEW_PASSWORD_REJECTED = "NEW_PASSWORD_REJECTED";

export function updateUser(user){
    return async dispatch => {
        await dispatch({
            type: "UPDATE_USER",
            payload: axios.put(`${API_BASE}/users/${user.id}`, {
                name: user.name,
                surname: user.surname,
                username: user.username,
                emailPhone: user.emailPhone
            })
                .then(result => {
                    localStorage.setItem("user", JSON.stringify(result.data));
                    return result.data;
                })
        })
    }
}

export function newPasswordOfUser(id, password){
    return async dispatch => {
        await dispatch({
            type: "NEW_PASSWORD",
            payload: axios.patch(`${API_BASE}/users/${id}/newPassword`, {
                password: password.old,
                newPassword: password.new,
                newPasswordAgain: password.newAgain
            }).then(result => {
                if(result.data === "PASSWORD_CHANGED_SUCCESSFUL"){
                    localStorage.removeItem("isLogin");
                    localStorage.removeItem("user");
                    localStorage.setItem("redirect_type", "CHANGE_PASSWORD");
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 2000);
                }
                return result.data;
            })
        })
    }
}
