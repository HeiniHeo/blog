import FormLayout from "../components/FormLayout"
import Head from 'next/head'
import Router from 'next/router'
import useInput from '../hooks/useInput'
import { useDispatch } from "react-redux"
import { UserLoginAction } from "../reducers/user"

const Login = () => {
    const dispatch = useDispatch();
    const userid = useInput('') // Object
    const userpw = useInput('') // Object

    const handleSubmit = async e => {
        e.preventDefault()

        await dispatch(UserLoginAction())
        // dispatch(()=>{
        //     return(dispatch)=>{
        //         setTimeout(()=>{
        //             dispatch(UserLoginAction())
        //         },3000)
        //     }
        // })

        userid.value === "web7722" && userpw.value === "1234"
        ? Router.push('/')
        : alert('아이디와 패스워드가 다릅니다.')
    }

    return (
        <>
            <Head>
                <title>Blog | 로그인</title>
            </Head>
            <FormLayout>
                <h2>로그인</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" {...userid} placeholder="아이디를입력해주세요." /><br/>
                    <input type="password" {...userpw} placeholder="패스워드를 입려해주세요."/>
                    <button type="submit">로그인</button>
                </form>
            </FormLayout>
        </>
    )
}

/*

value="ok"
{...{"value":"ok"}}
{
value:"ㅁㄴㅇㄻㄴㅇㄹ"
onChange:()=>{alert(1)}
}

value="ㅁㄴㅇㄻㄴㅇㄹ" onChange=()=>{alert(1)}
*/
export default Login