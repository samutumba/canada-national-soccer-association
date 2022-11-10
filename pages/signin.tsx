import { GetServerSideProps, NextPage } from "next"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Head from "next/head";
import { useSetRecoilState } from "recoil";
import { loadingState, TokenState } from "../atoms";
import { AuthRestricted } from "../components";
import axios from "axios";
import Cookies from 'js-cookie'

const formSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is mandatory').min(5, 'Username must be atleast 5 characters long'),
    password: Yup.string()
      .required('Password is mandatory')
      .min(4, 'Password must be atleast 3 characters long'),
  })

const SignInPage: NextPage = () => {

 const router = useRouter()
 const setLoading= useSetRecoilState(loadingState)
 const setToken = useSetRecoilState(TokenState)
 
  const { register, handleSubmit, reset, formState: { errors } } = useForm<{
  username: string,
  password: string
 }>({
   mode: "onChange",
   resolver: yupResolver(formSchema)
 });

  const onSubmit = async (data: {
  username: string,
  password: string,
 }) => {

    setLoading(true)
    
    axios.post('/api/login', data).then((res) => {
      setLoading(false);
      Cookies.set("auth", res.data.token, {expires: 1})
      toast.success("Welcome")
      router.push('/app');
    }).catch((err) => {
      setLoading(false)
      toast.error("Please check your crudentials and try again")
    })
   
 };

 return (<div className="w-full h-full min-h-screen flex justify-center items-center bg-gray-200">
   <Head>
   <title>Sign In</title>
  </Head>
  <AuthRestricted>
  <form onSubmit={handleSubmit(onSubmit)}  className="bg-white rounded-2xl w-full p-9 max-w-lg flex flex-col gap-2 ">
   <img src="/Soccerlogo.png" alt="SignIn" className="w-16 h-16 ml-3 mb-5" />
   <h1>Sign In</h1>
   <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    <label htmlFor="">Username</label>
   <input className={`${errors.username ? "input-error" : "input-okay"}`} type="text" {...register("username")} />
   {errors.username && <span className="error">{ errors.username.message }</span>}
   <label htmlFor="">Password</label>
   <input className={`${errors.password ? "input-error" : "input-okay"}`} type="password" {...register("password")} />
   {errors.password && <span className="error">{ errors.password.message }</span>}
   <button type="submit" className="btn-main mt-5">
    Sign In
   </button>
   </form>
   </AuthRestricted>
 </div>)
}


export default SignInPage;