import { createStore,  combineReducers} from 'redux'

//Importing reducer
import userReducer from './userReducer'
import postReducer from './postReducer'

//Exporting all in each reducer
export * from './userReducer'
export * from './postReducer'

const rootReducer = combineReducers({
    userReducer, postReducer
})

//Define store
const store = createStore(rootReducer)

export default store;

