
import { useEffect } from "react"
import { useRouter } from 'next/router'
import { toast } from "react-hot-toast"
import { useRecoilState, useSetRecoilState } from "recoil"
import { loadingState, TokenState, UserState } from "../../atoms"
import axios from "axios"
import Cookies from 'js-cookie'


export const NonAuthRestricted = ({ children }: {
  children: React.ReactNode,
}) => {
 const router = useRouter()
  const setLoading = useSetRecoilState(loadingState)
  const [ user, setUser ] = useRecoilState(UserState)

  useEffect(() => {

    if (!user) {
        setLoading(true)
    const token = Cookies.get('auth')
    axios.get('/api/user', {
      headers: {
        authorization: token
      }
    }).then((res) => {
      setLoading(false);
      setUser(res.data.user)

    }).catch((err) => {
      setLoading(false);
      setUser(undefined)
      toast.error("Please Sign in to continue")
      router.push('/signin')
    })
    }
  


 }, [])
  
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

    !user &&
    setLoading(true)
    const tokenCookie = Cookies.get('auth')
    axios.get('/api/user', {
      headers: {
        authorization: tokenCookie
      }
    }).then((res) => {
      setLoading(false);
      setUser(res.data.user)
      router.push('/app')

    }).catch((err) => {
      setLoading(false);
      setUser(undefined)
    })
  
  }, [])

 if (!user) {
  return <>{children}</>
 }

  return <></>

 
}