import { NextPage } from "next"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { toast } from "react-hot-toast";
import Head from "next/head";
import axios from "axios";
import { useRouter } from 'next/router'
import { useSetRecoilState } from "recoil";
import { loadingState } from "../atoms";
import { AuthRestricted } from "../components";
import Link from "next/link";
import Image from "next/image";

const formSchema = Yup.object().shape({
    username: Yup.string()
    .required('Username is mandatory').min(5, 'Username must be atleast 5 characters long'),
    password: Yup.string()
      .required('Password is mandatory')
      .min(6, 'Password must be at 6 characters long'),
    confirmPassword: Yup.string()
      .required('Password is mandatory')
      .oneOf([Yup.ref('password')], "Passwords must match"),
  })

const SignUpPage: NextPage = () => {
 const router = useRouter()
 const setLoading  = useSetRecoilState(loadingState)
 
 const { register, handleSubmit,  formState: { errors } } = useForm<{
  username: string,
  password: string,
  confirmPassword: string
 }>({
   mode: "onBlur",
   resolver: yupResolver(formSchema)
 });

 const onSubmit = (data: {
  username: string,
  password: string,
  confirmPassword: string
 }) => {

  setLoading(true);
  axios.post('api/user', data).then(res => {

   toast.success(res.data.message)
   setLoading(false)
   router.push('/signin')
  }).catch(err => {
   toast.error(err.message);
   setLoading(false)
  })
 };


 return (<div className="w-full h-full min-h-screen flex justify-center items-center bg-gray-200">
  <Head>
   <title>Sign Up</title>
  </Head> 
  <AuthRestricted>
  <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl w-full p-9 max-w-lg flex flex-col gap-2 ">
       <span className="relative ml-3 mb-5 w-16 h-16">
         <Image src="/Soccerlogo.png" alt="SignIn" layout="fill" className="object-fit" />
       </span>
   <h1>Sign Up</h1>
   <p>Already have an account? <Link href="/signin">Sign In </Link></p>
   <label htmlFor="">Username</label>
   <input className={`${errors.username ? "input-error" : "input-okay"}`} type="text" {...register("username")} />
   {errors.username && <span className="error">{ errors.username.message }</span>}
   <label htmlFor="">Password</label>
   <input className={`${errors.password ? "input-error" : "input-okay"}`} type="password" {...register("password")} />
   {errors.password && <span className="error">{ errors.password.message }</span>}
   <label htmlFor="">Confirm Password</label>
   <input className={`${errors.confirmPassword ? "input-error" : "input-okay"}`} type="password" {...register("confirmPassword")} />
   {errors.confirmPassword && <span className="error">{ errors.confirmPassword.message }</span>}
   <button type="submit" className="btn-main mt-5">
    Sign up
   </button>
   </form>
   </AuthRestricted>
 </div>)
}

export default SignUpPage;