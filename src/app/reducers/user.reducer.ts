import { User } from "../model/user.model";

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


export function userReducer(state: User[] = [], action: any) {
    switch (action.type) {
        case REGISTER_USER:
            return [...state, action.payload];
        case LOGOUT_USER:
            return [];
        default:
            return state;
    }
}
