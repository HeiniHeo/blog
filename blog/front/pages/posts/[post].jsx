// /admin/:menu/
import { useRouter } from 'next/router'
import BlogLayout from "../../components/BlogLayout"
import Head from 'next/head'

const data = [
    {
        id: '1',
        subject: 'dd',
        contents: 'ddd',
        date: '2021-07-28',
        hit: '0'
    }, {
        id: '2',
        subject: 'dd2',
        contents: 'ddd2',
        date: '2021-07-28',
        hit: '0'
    }
]

const Post = () => {
    const router = useRouter()
    const { post } = router.query //카테고리 이름

    const list = data.map(v => {
        return (
            <div>
                <ul>
                    <li>{v.subject}</li>
                    <li>{v.content}</li>
                    <li>{v.date}</li>
                </ul>
            </div>
        )
    })

    return (
        <>
            <Head>
                <title>Blog | 글쓰기</title>
            </Head>
            <BlogLayout>
                {post} 글쓰기 페이지입니다.
                <div>
                    {list}
                </div>
            </BlogLayout>
        </>
    )
}

export default Post