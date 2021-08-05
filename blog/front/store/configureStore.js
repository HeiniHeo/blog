import { createWrapper } from 'next-redux-wrapper'
import { compose, createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMidddlewware from 'redux-thunk'

// npm install redux-thunk

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    // console.log(action,dispatch,getState) //object function function
    return next(action)
}

const configureStore = () => {

    const middlewares = [loggerMiddleware,thunkMidddlewware];

    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))

    // const enhancer = composeWithDevTools(applyMiddleware(...middlewares))
    const Store = createStore(reducer, enhancer);
    return Store
}

//  첫번째 redux 의 Store => context
//  두번째
const wrapper = createWrapper(configureStore) // <Store.Provider></Store.Provider>

export default wrapper