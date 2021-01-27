import { useMemo } from 'react'
import { createStore,  combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

//Importing reducer
import userReducer from './userReducer'
import postReducer from './postReducer'
import graphReducer from './graphReducer'

//Exporting all in each reducer
export * from './userReducer'
export * from './postReducer'
export * from './graphReducer'

const rootReducer = combineReducers({
    userReducer, postReducer, graphReducer
})

let store;
let initialState = {}

const initStore = (preloadState = initialState) => {
    return createStore(rootReducer, preloadState, composeWithDevTools(applyMiddleware()))
}

export const initilizeStore = (preload) => {
    let newStore = store ?? initStore(preload);
    if (preload && store) {
        newStore = initStore({
            ...store.getState(),
            ...preload
        })
        store = undefined;
    }
    if (typeof window === 'undefined') return newStore;
    if (!store) store = newStore;
    return newStore
}

export const useStore = (state) => {
    const store = useMemo(() => initilizeStore(state), [state])
    return store;
}