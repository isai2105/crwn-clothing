// functions that return objects
// eachobject in the correct format that the action is expecting

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});