import FormLayout from "../components/FormLayout"
import Head from 'next/head'
import useInput from "../hooks/useInput"
import { useState } from 'react'

const Join = () => {

    const userid = useInput('');
    const username = useInput('');
    const userphone = useInput('');
    const userpassword = useInput('');

    const [passwordCheck, setpasswordCheck] = useState('');
    const [passwordError, setpasswordError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();

        if(userpassword.value !== passwordCheck){
            setpasswordError(true)
            return
        }else{
            setpasswordError(false)
        }

        if(!term){
            setTermError(true)
            return
        }
    }

    const handlePassword = (e) => {
        const { value } = { ...e.target }
        setpasswordError(userpassword.value !== value);
        setpasswordCheck(value)
    }

    const [term, setTerm] = useState(false)
    const [termError, setTermError] = useState(false)

    const handleTerm = e => {
        setTermError(e.target.checked !== true);
        setTerm(e.target.checked);
    }

    return (
        <>
            <Head>
                <title>Blog | 회원가입</title>
            </Head>
            <FormLayout>
                <h2>회원가입</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" {...userid} placeholder="아이디를 입력해주세요." /><br />
                    <input type="text" {...username} placeholder="이름을 입력해주세요." /><br />
                    <input type="password" {...userpassword} placeholder="비밀번호를 입력해주세요." /><br />
                    <input type="password" value={passwordCheck} onChange={handlePassword} placeholder="비밀번호를 다시 입력해주세요." /><br />
                    {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                    <input type="text" {...userphone} placeholder="전화번호를 입력해주세요." /><br />
                    <input type="checkbox" id="term" checked={term} onChange={handleTerm} />
                    <label htmlFor="term">약관에 동의하시겠습니까?</label> 
                    {termError && <div>약관에 동의가 필요합니다.</div>}
                    <br />
                    <button type="submit">회원가입</button>
                </form>
            </FormLayout>
        </>
    )
}

export default Join