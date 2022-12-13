
import { useEffect } from "react"
import { useRouter } from 'next/router'
import { toast } from "react-hot-toast"
import { useRecoilState, useSetRecoilState } from "recoil"
import { loadingState, UserState } from "../../atoms"
import axios from "axios"
import { getCookie } from "cookies-next"

export const NonAuthRestricted = ({ children }: {
  children: React.ReactNode,
}) => {
 const router = useRouter()
  const setLoading = useSetRecoilState(loadingState)
  const [ user, setUser ] = useRecoilState(UserState)

  useEffect(() => {

    if (!user) {
      const token = getCookie('auth')
    axios.get('/api/user', {
      headers: {
        authorization: token
      }
    }).then((res) => {
     
      setUser(res.data.user)

    }).catch(() => {
      
      setUser(undefined)
      toast.error("Please Sign in to continue")
      router.push('/signin')
    })
    }
  


  }, [router, setLoading, setUser ,user ])
  
 if (user) {
  return <>{children}</>
 }

  return <div className="hidden">{ children }</div>

}

export const AuthRestricted = ({ children }: {
  children: React.ReactNode,
}) => {
 const router = useRouter()
 const setLoading = useSetRecoilState(loadingState)
  const [ user, setUser ] = useRecoilState(UserState)

  useEffect(() => {
    const tokenCookie = getCookie('auth')
    !user &&
   
    axios.get('/api/user', {
      headers: {
        authorization: tokenCookie
      }
    }).then((res) => {
      setLoading(false);
      setUser(res.data.user)
      router.push('/app')

    }).catch(() => {
      setLoading(false);
      setUser(undefined)
    })
  
  }, [router, setLoading, setUser, user])

 if (!user) {
  return(<>{children}</>)
 }

  return (<></>)

 
}