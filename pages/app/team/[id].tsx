import { NextPage } from "next";
import { DashboardLayout, PageTitle  } from "../../../components"
import { Icon } from '@iconify/react';
import { client } from "../../../lib/prisma";
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'


const Home: NextPage = () => {
  
  
 return (<DashboardLayout>
  <div className="flex flex-row gap-4 items-center">
   <span className="p-3 bg-white rounded-full">
   </span>
   <PageTitle title="" description="Oshawa, ON" />
  </div>
  <div className="flex flex-row first-letter:flex-wrap gap-4 m-4">
   <span className="shadow-lg items-center rounded-lg bg-green-900 p-4 flex flex-row gap-4">
    <span className="p-3 w-16 h-16 flex text-center justify-center items-center bg-white rounded-full">
      <Icon icon="material-symbols:stadium-outline-rounded"className="text-3xl text-green-900 "/>
    </span>
    <div className="flex flex-col gap-1 text-gray-400 text-sm">
     <h5>Home</h5>
     <h2 className="text-white text-3xl font-title font-semibold ">Vaso&apos;s Field</h2>
     <p>50 Conlin Rd, Oshawa, ON L1H 7K4</p>
    </div>

   </span>
    <span className="shadow-lg border justify-evenly items-center rounded-lg w-6/12 text-lg p-4 flex flex-row gap-4">
      <div className="flex flex-col gap-2">
       <p>Win</p>
       <h1>12</h1>
      </div>
      <div className="flex flex-col gap-2">
       <p>Draw</p>
       <h1>2</h1>
      </div>
      <div className="flex flex-col gap-2">
       <p>Loss</p>
       <h1>6</h1>
      </div>
    </span>
     <span className="shadow-lg lg:w-48 items-center rounded-lg bg-green-900 p-4 flex flex-row gap-4">
    <span className="p-3 w-16 h-16 flex text-center justify-center items-center bg-white rounded-full">
      <Icon icon="ant-design:trophy-outlined"className="text-3xl text-green-900 "/>
    </span>
    <div className="flex flex-col gap-1 text-gray-400 text-sm">
     <h5>Current Position</h5>
     <h2 className="text-white text-3xl font-title font-semibold ">2nd</h2>
    </div>
   
   </span>
   <div className="shadow-lg border rounded-lg lg:w-5/12 flex w-full flex-col">
      
    </div>
  </div>
 </DashboardLayout>
)
}


export default Home;