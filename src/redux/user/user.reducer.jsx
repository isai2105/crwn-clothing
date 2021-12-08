// a reducer is a function that gets the current state and the action

const INITIAL_STATE = {
    currentUser: null
}

// note that we pass the state with a default value
// null does not trigger the default value .. default value is only when not specified (undefined)
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            // we retrieve the same state, only with the "curentUser" property modified
            // we return a new object, so Redux notes the change .. if we return the same object, it doe snot update
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;