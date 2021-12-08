import { UserActionTypes } from "./user.types";

// functions that return objects
// eachobject in the correct format that the action is expecting

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});