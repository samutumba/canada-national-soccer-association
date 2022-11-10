import moment from "moment";
import { NextPage } from "next";
import { DashboardLayout, PageTitle, CreatePlayer } from "../../components";

const Dashboard: NextPage = () => {
 return (<DashboardLayout>
   <PageTitle title="Home" description="Welcome back! Now let's find the next best thing" />
   <div className="flex justify-end  flex-col mt-4 border rounded-xl h-[24rem] bg-david mx-auto bg-cover bg-[center_top] max-w-screen-2xl w-full text-white">
     <span className="bg-gradient-to-r justify-center h-full flex flex-col text-left gap-4 items-left from-black self-bottom rounded-l-2xl pl-7 pb-12 w-full lg:w-1/3">
       <h1 className="text-5xl">Explore </h1>
       <p>View recent matches, top performers <br />
         and other important news </p>
     </span>
   </div>
   <h2 className="mt-4">
     Recent Games
   </h2>
   <section className="flex my-4 flex-row gap-4 flex-wrap">
     <section className="flex flex-col justify-center bg-white p-5 rounded-2xl">
        <span className="w-full max-w-md flex flex-row items-center gap-2">
       <h3 className="text-right">
         Durham Lords Men
       </h3>
       <div className="h-16 w-16 bg-green-900 rounded-full"></div>
       <h1 className="text-5xl">1</h1>
       <span>-</span>
       <h1 className="text-5xl">2</h1>
       <div className="h-16 w-16 bg-red-700 rounded-full"></div>
       <h3>
         Seneca Stings Men
       </h3>
       </span>
       <p className="text-center">
         {moment([2022, 10, 18]).calendar()}
       </p>
     </section>
     <section className="flex flex-col justify-center bg-white p-5 rounded-2xl">
        <span className="w-full max-w-md flex flex-row items-center gap-2">
       <h3 className="text-right">
         Durham Lords Men
       </h3>
       <div className="h-16 w-16 bg-slate-200 shadow-sm rounded-full"></div>
       <h1 className="text-5xl">1</h1>
       <span>-</span>
       <h1 className="text-5xl">0</h1>
       <div className="h-16 w-16 bg-green-900 rounded-full"></div>
       <h3>
         Algonquin Wolves Mens
       </h3>
       </span>
       <p className="text-center">
         {moment([2022, 10, 15]).calendar()}
       </p>
     </section>
    
     
   </section>
  
 </DashboardLayout>)
}

export default Dashboard;