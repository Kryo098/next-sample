import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"

type PostProps = {
  id: string
}

const Post: NextPage<PostProps> = (props) => {
  const { id } = props
  const router = useRouter()

  if (router.isFallback) {
    //フォールバックページ向けの表示を返す
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon" />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{`/posts/${id}に対するページです`}</p>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths =async () => {
  const paths = [
    {
      params: {
        id: "1",
      },
    },
    {
      params: {
        id: "2",
      },
    },
    {
      params: {
        id: "3",
      },
    },
  ]
  // fallbackをfalseにすると、pathsで定義されたページ以外は404ページを表示する
  return { paths, fallback: false }
}

// getStaticPaths実行後にそれぞれのパスに対してgetStaticPropsが実行される
// bug:普通はcontext!==undefinedであれば定義できるがなぜかできないのでanyとしている
export const getStaticProps: GetStaticProps<any> = async (context:any) => {
  const id = Array.isArray(context.params["id"]) ? context.params["id"][0] : context.params["id"]
  return {
    props: {
      id,
    }
  }
}

export default Post