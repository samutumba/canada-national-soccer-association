import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"

export const MainLayout = ({ children }: {
  children: React.ReactNode | React.ReactNode[]
}) => {
  return (<div className="drawer font-paragraph">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col">
      <div className="flex w-full navbar max-w-screen-lg mx-auto rounded-lg my-3 px-3 py-3  items-center justify-between">
        <div className="mx-9">
          <span className="p-2 rounded-full opacity-75">
            <span className="relative ml-3 mb-5 w-16 h-16">
              <Image src="/Soccerlogo.png" alt="SignIn" layout="fill" className="object-fit" />
            </span>
          </span>

        </div>
        <div className="flex lg:hidden">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <Icon icon="icon-park:hamburger-button" />
            </label>
          </div>
        </div>
        <div className="hidden text-lg lg:flex items-center gap-8">

        </div>
        <div className="hidden lg:flex">

          <Link href="/signin">
            <button className="py-2 px-5 rounded-full border border-matte">
              Sign In
            </button>
          </Link>

        </div>
      </div>
      {children}
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto z-10 w-80 bg-base-100">
        <li>
          <Link href="/">
            <a>
              <span className="relative ml-3 mb-5 w-16 h-16">
          <Image src="/Soccerlogo.png" alt="SignIn" layout="fill" className="object-fit" />
        </span></a>
        </Link></li>
        <li><a href="/login" className="py-2 px-5 rounded-full border border-matte">Sign In</a></li>

      </ul>

    </div>
  </div>)
}