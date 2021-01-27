import * as Type from './type'

const initialState = {
    spaceUsers: null,
}

const spaceReducer = (state = initialState, action) => {

    let { type, payload } = action;

    switch(type) {
        case Type.SET_SPACE_USERS:
            return {...state, spaceUsers: payload}
        default:
            return state;
    }

}

export * from './type'
export * from './queries'
export default spaceReducer;