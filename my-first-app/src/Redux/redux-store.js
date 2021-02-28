import {combineReducers, createStore} from 'redux';
import dialogsReducer from './messages-reducer'
import usersReducer from './users-reducer'
import contentReducer from './content-reducer'

let reducers = combineReducers({
        messages: dialogsReducer,
        users: usersReducer,
        content: contentReducer,
})

let store = createStore(reducers);

window.store = store

export default store