import { applyMiddleware, combineReducers, compose } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import ReduxThunk from 'redux-thunk';
import { usersReducer } from './reducer/users.reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    usersModule : usersReducer,
})
export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))) //Passing the reducer

