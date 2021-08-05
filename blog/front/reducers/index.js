import {HYDRATE} from "next-redux-wrapper"
import { combineReducers } from "redux"
import user from './user'
import category from './category'

const initialState = {
    user: {
        // IsLogin: false
    },
    posts: {

    },
    category: {
        // menu: [
        //     {
        //         id: '1',
        //         category: '대분류메뉴1',
        //         url: '/posts/1'
        //     }, {
        //         id: '2',
        //         category: '대분류메뉴2',
        //         url: '/posts/2'
        //     }, {
        //         id: '3',
        //         category: '대분류메뉴3',
        //         url: '/posts/3'
        //     }, {
        //         id: '4',
        //         category: '대분류메뉴4',
        //         url: '/posts/4'
        //     }, {
        //         id: '5',
        //         category: '대분류메뉴5',
        //         url: '/posts/5'
        //     }
        // ]
    }
}

// const USER_LOGIN = "USER_LOGIN"
// const USER_LOGOUT = "USER_LOGOUT"

// export const UserLoginAction = () => {
//     return {
//         type: USER_LOGIN
//     }
// }

// export const UserLogoutAction = () => {
//     return {
//         type: USER_LOGOUT
//     }
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case USER_LOGIN:
//             return {
//                 ...state,
//                 user: {
//                     ...state.user,
//                     IsLogin: true
//                 }
//             }
//         case USER_LOGOUT:
//             return {
//                 ...state,
//                 user: {
//                     ...state.user,
//                     IsLogin: false,
//                 }
//             }
//         default:
//             console.log('start')
//             return state
//     }
// }

const reducer = combineReducers({
    index:(state={},action)=>{
        switch(action.type){
            case HYDRATE:
                return{
                    ...state,
                    ...action.payload
                }
            default:
                return state
        }
    },
    user,
    category
})

export default reducer