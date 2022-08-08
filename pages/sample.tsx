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
//----context.localeでアクセスできるデータ----//
// params       : パスパラメータ。SSGはgetStaticPaths関数を別途定義した時に参照可能
// locale       : 現在のロケール情報（可能な限り）
// locales      : サポートしているロケールのデータ（可能な限り）
// defaultLocale: デフォルトのロケールのデータ（可能な限り）
// preview      : Preview Modeか
// previewData  : Preview ModeでsetPreviewDataによってセットされたデータ


export default SSG