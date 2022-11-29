import { NextPage } from "next";
import { DashboardLayout, PageTitle } from "../../components"

const Home: NextPage = () => {
 return (<DashboardLayout>
  <PageTitle title="Matches" description="View the Games " />
  <div className="flex flex-col mt-2 lg:flex-row border rounded-xl h-[20rem] bg-kick mx-auto bg-cover bg-right-bottom text-white max-w-screen-2xl w-full items-center">
   <span className="bg-gradient-to-r justify-center h-full flex flex-col text-left gap-4 items-left from-black self-bottom rounded-l-2xl pl-7 pb-12 w-full lg:w-2/3">
    <h1 className="text-5xl">Theater</h1>
    <p>The 90 Minutes</p>
   </span>
  </div>
 </DashboardLayout>
 )
}

export default Home;