import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import cartReducer from './cart/cartDucks'

const rootReducer = combineReducers({
    cart: cartReducer,
})

const isDev = process.env.NODE_ENV !== 'production'
const isWindow = typeof window !== 'undefined'
const isDevToolsExtension = isDev && isWindow && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = isDevToolsExtension || compose
const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk)))

export default store