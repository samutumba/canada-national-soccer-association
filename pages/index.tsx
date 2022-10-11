import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';
import { MainLayout } from '../components';

const Home: NextPage = () => {
  return (<MainLayout>
    <div className="w-full">
      
        <header className="px-5 flex h-full flex-col gap-1">
   <div className="flex flex-col lg:flex-row border rounded-xl h-96 bg-crowd bg-cover mx-auto  max-w-screen-2xl w-full items-center">
    <div className="lg:w-1/2 flex justify-start flex-col text-white items-center text-3xl lg:text-7xl h-full font-title font-bold bg-gradient-to-r rounded-l-xl from-black p-10">
     <p className="text-xs lg:text-sm font-paragraph font-normal flex items-center gap-5 py-2 px-5 border border-burn bg-lavender text-burn rounded-full w-fit ml-0 mb-3">
      Sponsored by <img src="/images/rbc.png" alt="RBC Canada" className="h-4 lg:h-6" />
     </p>
     <h2>Find the next star</h2>
     <p className="mt-3 w-full font-paragraph font-normal text-sm lg:text-base">
      Welcome to the future of Canadian Scouting. <br />
      Plenty of talents at your fingertips. 
      Create your superteam today 
     </p>
    </div>
    <div className="lg:w-1/2">

    </div>
   </div>
   <div className="flex flex-col my-7  text-center gap-2 justify-center">
    <h1 className="font-title font-semibold mt-9 text-2xl">Our Team</h1>
  <div className="flex justify-center flex-wrap text-center gap-4 my-2 items-center">
    <div className="flex flex-row gap-4 justify-center">
      <Avatar
      src="https://media-exp1.licdn.com/dms/image/C4D03AQEJSRy1Dlr8zw/profile-displayphoto-shrink_800_800/0/1628211852205?e=1669248000&v=beta&t=UevwTFjva5nl8WylszA4HqYY0F661RZ8niaSQLGG1Cs"
      sx={{ width: 60, height: 60 }}
      >
       
      </Avatar>
      <div className="space-y-1 font-medium ">
    <div>
      Samuel Mutumba
    </div>
    <div className="text-sm text-gray-500 dark:text-gray-400">
      Team Member
    </div>
  </div>
    </div>
     <div className="flex flex-col gap-4 justify-center">
       <div className="flex flex-row gap-4 justify-center">
      <Avatar
      src="https://media-exp1.licdn.com/dms/image/C5603AQEk1aOfJE0FmA/profile-displayphoto-shrink_800_800/0/1638591960856?e=1669248000&v=beta&t=SmhSYH5A9Do8aH79RsQUIc15Cr98LmUb_KRmZD2XIB0"
      sx={{ width: 60, height: 60 }}
      >
       
      </Avatar><div className="space-y-1 font-medium ">
    <div>
      Sonadi Kannangara
    </div>
    <div className="text-sm text-gray-500 dark:text-gray-400">
      Team Member
    </div>
  </div>
      
    </div>
     </div>
          <div className="flex flex-col gap-4 justify-center">
       <div className="flex flex-row gap-4 justify-center">
      <Avatar
      src="https://media-exp1.licdn.com/dms/image/C4E03AQF22bANAYgYTA/profile-displayphoto-shrink_800_800/0/1638483571556?e=1669248000&v=beta&t=h0mkZj6snB3Fw5Ut_mWbmuEMuBkZTl6Ffj9a8TBaaoA"
      sx={{ width: 60, height: 60 }}
      >
      
      </Avatar>
       <div className="space-y-1 font-medium ">
    <div>
      Tyler Osbourne
    </div>
    <div className="text-sm text-gray-500 dark:text-gray-400">
      Team Member
    </div>
  </div>
    </div>
    </div>
  
      <div className="flex flex-col gap-4 justify-center">
       <div className="flex flex-row gap-4 justify-center">
      <Avatar
      src="https://media-exp1.licdn.com/dms/image/C4D03AQHoNv2gLtvpkw/profile-displayphoto-shrink_800_800/0/1632869907594?e=1669248000&v=beta&t=CAHdqxYYYlB8NoJl-OA1iF4EadcjoXUHM6tqEVebYmI"
      sx={{ width: 60, height: 60 }}
       >
      </Avatar>
    
       <div className="space-y-1 font-medium ">
    <div>
      Elaine Nankanja
    </div>
    <div className="text-sm text-gray-500 dark:text-gray-400">
      Team Member
    </div>
  </div>
      
    </div>
    </div>

   </div>
   </div>
 
  </header>
  <div className="flex flex-col mb-4 text-center pb-6 gap-2 justify-center bg-[#0C0101] text-white">
   <h1 className="font-title font-semibold mt-9 text-2xl">Our Features</h1>
   <div className="flex justify-center flex-wrap text-center gap-4 my-2 items-center">
    <div className="text-center w-36 h-36 text-7xl flex flex-col gap-8  justify-center">
     <Icon icon="carbon:soccer" className="mx-auto"/>
     <p className="text-base">Game Statistics</p>
    </div>
    <div className="text-center text-7xl w-36 h-36 flex flex-col gap-8  justify-center">
     <Icon icon="la:tshirt" className="mx-auto"/>
     <p className="text-base">Player Records</p>
    </div>
    <div className="text-center text-7xl w-36 h-36 flex flex-col gap-8  justify-center">
     <Icon icon="carbon:report" className="mx-auto"/>
     <p className="text-base">Scouting Reports</p>
    </div>
    <div className="text-center text-7xl w-36 h-36 flex flex-col gap-8 justify-center">
      <Icon icon="gala:secure" className="mx-auto" />
     <p className="text-base">Secure storage</p>
    </div>
   </div>
   </div> 
    </div>
  </MainLayout>
  )
}

export default Home
