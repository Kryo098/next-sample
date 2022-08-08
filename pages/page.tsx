import { useRouter } from "next/router"
import { useEffect } from "react"

const Page = () => {
  const router = useRouter()

  // コメントアウトを解除すると/userouterに移動するようになる
  // useEffect( ()=> {
  //   router.push("/userouter")
  // })

  return <span>{router.pathname}</span>
}

export default Page