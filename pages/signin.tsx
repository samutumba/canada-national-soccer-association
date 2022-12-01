import { NextPage } from "next"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Head from "next/head";
import { useSetRecoilState } from "recoil";
import { loadingState } from "../atoms";
import { AuthRestricted } from "../components";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { setCookie } from "cookies-next";
import moment from "moment";

const formSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is mandatory').min(5, 'Username must be atleast 5 characters long'),
  password: Yup.string()
    .required('Password is mandatory')
    .min(4, 'Password must be atleast 3 characters long'),
})

const SignInPage: NextPage = () => {

  const router = useRouter()
  const setLoading = useSetRecoilState(loadingState)

  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm<{
    username: string,
    password: string
  }>({
    mode: "onChange",
    resolver: yupResolver(formSchema)
  });

  const handleExampleSignIn = () => {
    setValue('username', "ExampleUser");
    setValue('password', '123456');

  }

  const onSubmit = async (data: {
    username: string,
    password: string,
  }) => {

    setLoading(true)

    axios.post('/api/login', data).then((res) => {
      setLoading(false);
      setCookie('auth', res.data.token, { expires: moment().add(1, 'day').toDate() })
      toast.success("Welcome")
      router.push('/app');
    }).catch((err) => {
      setLoading(false);
      reset()
      toast.error("Please check your credentials and try again")
    })

  };

  return (<div className="w-full h-full min-h-screen flex justify-center items-center bg-gray-200">
    <Head>
      <title>Sign In</title>
    </Head>
    <AuthRestricted>
      <div className="flex flex-col w-full m-4 max-w-lg mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-9 flex flex-col gap-2 ">
          <span className="relative ml-3 mb-5 w-16 h-16">
            <Image src="/Soccerlogo.png" alt="SignIn" layout="fill" className="object-fit" />
          </span>

          <h1>Sign In</h1>
          <div>Don&lsquo;t have an account? <Link href="/signup"><a>Sign Up</a></Link></div>
          <label htmlFor="">Username</label>
          <input className={`${errors.username ? "input-error" : "input-okay"}`} type="text" {...register("username")} />
          {errors.username && <span className="error">{errors.username.message}</span>}
          <label htmlFor="">Password</label>
          <input className={`${errors.password ? "input-error" : "input-okay"}`} type="password" {...register("password")} />
          {errors.password && <span className="error">{errors.password.message}</span>}
          <button type="submit" className="btn-main mt-5">
            Sign In
          </button>
        </form>
        <button onClick={handleExampleSignIn} className="btn-secondary mt-3">
          <Icon icon="ph:sign-in-bold" className="inline mb-1 text-2xl" /> Sign in as Test User
        </button>
      </div>
    </AuthRestricted>

  </div>)
}


export default SignInPage;