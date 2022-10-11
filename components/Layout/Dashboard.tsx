import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { Avatar } from '@mui/material';

export const DashboardLayout = ({ children }: {
  children: React.ReactNode,
}) => {
 return (<>
  <div className="drawer drawer-mobile bg-slate-300 font-paragraph">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
   <div className="drawer-content flex flex-col h-full min-h-screen">
    <nav className='lg:hidden flex flex-row items-center justify-between px-8 py-5 text-2xl bg-slate-50 w-full'> 
      <img
      src="/Soccerlogo.png"
      className=" h-9 w-auto"
      alt="My Logo"
    />  <label htmlFor="my-drawer-2" className="lg:hidden"><Icon icon="charm:menu-hamburger" /></label>
       </nav>
       <div className='p-4 flex-col w-full h-full'>
          {children}
       </div>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-3 rounded-r-3xl overflow-y-auto w-80 flex-wrap bg-slate-100 text-slate-400">
     <li><a>
      
      <div className="flex flex-col gap-2 justify-center">
       <div className="flex flex-row gap-4 justify-center items-center">
      <Avatar
      src={`https://avatars.dicebear.com/api/identicon/${"sas"}.svg`}
      sx={{ width: 60, height: 60 }}
       >
      </Avatar>
    
       <div className="space-y-1 font-medium">
         <div>
           Demo Person
         </div>
         <div className="text-sm text-gray-500 dark:text-gray-400">
           Recruiter
              </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
           Durham College 
         </div>
       </div>
      
    </div>
    </div>
     </a></li>
     <li><a>Menu</a></li>
     <li><a>
      <SidebarItem link='/app'>
       <Icon icon="fluent:home-16-regular" className='inline text-3xl' /> Home
     </SidebarItem>
     </a></li>
     <li><a>
      <SidebarItem link='/app/players'>
       <Icon icon="carbon:soccer" className='inline text-3xl' /> Players
     </SidebarItem>
     </a></li>
     <li><a>
      <SidebarItem link='/app/teams'>
       <Icon icon="mdi:soccer-field" className='inline text-3xl'/> Teams
     </SidebarItem>
     </a></li>
     <li><a>
      <SidebarItem link='/app/matches'>
       <Icon icon="emojione-monotone:soccer-ball" className='inline text-3xl'/> Matches
     </SidebarItem>
     </a></li>
     <li><a>
      <SidebarItem link='/app/settings'>
       <Icon icon="clarity:settings-line" className='inline text-3xl'/> Settings
     </SidebarItem>
     </a></li>
     <li className='text-xs text-center mt-9'>
      {new Date().getFullYear()} CNSA Recruiting Project
     </li>
    </ul>
  
  </div>
</div>
  
 </>)
}

export const SidebarItem = ({ children, link }: {
 children: React.ReactNode,
 link: string,
}) => {
 const router = useRouter();
 let color = 'text-slate-700 hover:bg-white hover:text-slate-900';

 if (link == router.pathname) {
  color = 'text-red-500 bg-red-100 hover:bg-red-500 hover:text-white'
 }
 return (
  <Link href={link}>
  <button className={`py-2 px-5 w-full items-center text-sm rounded-lg flex flex-row gap-4 ${color}`}>
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