import { GetStaticProps, NextPage, NextPageContext } from "next"
import Head from "next/head"

//TODO:ページコンポーネントのpropsの型定義
type SSGProps = {
  message: string
}


//SSGページ
const SSG: NextPage <SSGProps> = (props) => {
  const { message } = props
  return (
    <div>
      <Head>
      <title>Static Site Generation</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページは静的サイト生成によってビルド時に生成されたページです。
        </p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp} にgetStaticPropsが実行されました。`
  console.log(message)
  return {
    props: {
      message,
    },
  }
}

export default SSG