import * as Type from './type';

const initialState = {
    users: null,
    userMessage: "Default user message",
    someUser: "Some"
}

const userReducer = (state=initialState, action) => {
    let { type, payload } = action;
    switch(type) {
        case Type.SET_USERS:
            return {...state, users: payload}
        case Type.SET_USER_MESSAGE:
            return {...state, userMessage: payload}
        case 'SOME_USER':
            return {...state, someUser: payload}
        default:
            return state
    }
}

export * from './type'
export * from './query'
export default userReducer