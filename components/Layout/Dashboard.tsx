import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { Avatar } from '@mui/material';
import { NonAuthRestricted } from '..';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../atoms';
import moment from 'moment';
import Image from 'next/image';

export const DashboardLayout = ({ children }: {
  children: React.ReactNode,
}) => {
  const user = useRecoilValue(UserState)

  return (<>
    <NonAuthRestricted>
      <div className="drawer drawer-mobile bg-transparent font-paragraph">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col h-full min-h-screen">
          <nav className='lg:hidden flex flex-row items-center justify-between px-8 py-5 text-2xl w-full'>
            <span className="relative ml-3 mb-5 w-16 h-16">
              <Image src="/Soccerlogo.png" alt="SignIn" layout="fill" className="object-fit" />
            </span>
            <label htmlFor="my-drawer-2" className="lg:hidden"><Icon icon="charm:menu-hamburger" /></label>
          </nav>
          <div className='p-4 bg-slate-100 flex-col w-full h-full'>
            {children}
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-3 rounded-r-3xl col gap-4 font-semibold mx-2 overflow-y-auto w-80 bg-white flex-wrap  text-slate-400">
            <li>

              <div className="flex flex-col gap-2 justify-center">
                <div className="flex flex-row gap-4 justify-center items-center">
                  <Avatar
                    src={`https://avatars.dicebear.com/api/initials/${user?.username || "CNSA"}.svg`}
                    sx={{ width: 60, height: 60 }}
                  >
                  </Avatar>

                  <div className="space-y-1 font-medium">
                    <div className="lowercase">
                      {user?.username}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Member since {moment(user?.createdAt).calendar()}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">

                    </div>
                  </div>

                </div>
              </div>
            </li>
            <li className='mt-5'>
              <SidebarItem link='/app'>
                <Icon icon="bi:house-door" className='inline text-3xl' /> Home
              </SidebarItem>
            </li>
            <li>
              <SidebarItem link='/app/settings'>
                <Icon icon="emojione-monotone:trophy" className='inline text-3xl' /> Competitions
              </SidebarItem>
            </li>
            <li>
              <SidebarItem link='/app/players'>
                <Icon icon="carbon:soccer" className='inline text-3xl' /> Players
              </SidebarItem>
            </li>
            <li>
              <SidebarItem link='/app/teams'>
                <Icon icon="la:tshirt" className='inline text-3xl' /> Teams
              </SidebarItem>
            </li>
            <li>
              <SidebarItem link='/app/matches'>
                <Icon icon="game-icons:soccer-ball" className='inline text-3xl' /> Matches
              </SidebarItem>
            </li>
            <li>
              <SidebarItem link='/app/location'>
                <Icon icon="material-symbols:stadium-outline-rounded" className='inline text-3xl' /> Locations
              </SidebarItem>
            </li>
            <li>
              <SidebarItem link='/app/profile'>
                <Icon icon="gg:profile" className='inline text-3xl' /> Profile
              </SidebarItem>
            </li>
            <li className='text-xs text-center mt-9'>
              {new Date().getFullYear()} CNSA Recruiting Project
            </li>
          </ul>

        </div>
      </div>
    </NonAuthRestricted>
  </>)
}

export const SidebarItem = ({ children, link }: {
  children: React.ReactNode,
  link: string,
}) => {
  const router = useRouter();
  let color = 'text-slate-700 hover:bg-red-50  hover:text-red-600';

  if (link == router.pathname) {
    color = 'text-red-500 bg-red-100 font-bold hover:bg-red-500 hover:text-white'
  }
  return (
    <Link href={link}>
      <button className={`py-3 px-5 w-full items-center text-base rounded-lg flex flex-row gap-4 ${color}`}>
        {children}
      </button>
    </Link>
  )
}

// type DashboardLayoutProps = {
//   children: React.ReactNode,
// };

// export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
//  return (<>{ children }</>)
// }