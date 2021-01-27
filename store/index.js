import { createStore,  combineReducers} from 'redux'

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

//Define store
const store = createStore(rootReducer)

export default store;

