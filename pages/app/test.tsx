import { NextPage } from "next";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { bgState } from "../../atoms";
import { DashboardLayout, PageTitle  } from "../../components"

const Home: NextPage = () => {
 const setBg = useSetRecoilState(bgState);


 useEffect(() => {
  setBg({
   image: "bg-corner" })
 }, [])
 return (<DashboardLayout>
   <PageTitle title="Test" description="Test Page" />
   <div className="bg-slate-200 m-1 p-3 w-full flex flex-col gap-2 h-full rounded-lg">
   <div className="w-full flex flex-row flex-wrap justify-right">
     <CreatePlayer />
   </div>
   <h1 className="font-title text-2xl font-semibold">Overview</h1>
   <section className="flex flex-row flex-wrap gap-2">
     <div className="stats shadow bg-white">
    <div className="stat">
      <div className="stat-title">Current Position</div>
      <div className="stat-value">3rd</div>
      <div className="stat-desc">Next Game - Ontario Tech (3rd Sept)</div>
    </div>
    </div>
    <div className="stats shadow bg-white">
     <div className="stat">
       <div className="stat-title">Total Players</div>
       <div className="stat-value">560</div>
       <div className="stat-desc">5% more than last season</div>
     </div>
    </div>
    <div className="stats shadow bg-white">
    <div className="stat">
      <div className="stat-title">Total Goals <span className="text-xs">(this season)</span></div>
      <div className="stat-value">500</div>
      <div className="stat-desc">21% more than last month</div>
    </div>
    </div>
    <div className="stats shadow bg-white">
      <div className="stat">
      <div className="stat-title">Top Scorer</div>
       <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src={`https://avatars.dicebear.com/api/avataaars/${"MINA LABIB"}.svg`} />
        </div>
      </div>
    </div>
        <div className="stat-value">14</div>
      <div className="stat-desc">Mina Labib (ST)</div>
       <div className="stat-desc">Durham College</div>
      </div>
    </div>
   </section>
   <div className="flex flex-col w-full lg:flex-row flex-wrap gap-1">
    <section className="w-full lg:w-5/12">
     <h1 className="font-title text-2xl font-semibold">Scout List</h1>
     <div className="overflow-x-auto bg-white rounded-md">
 
</div>
    </section>
    <section className="w-full lg:w-5/12">
       <h1 className="font-title text-2xl font-semibold">Player Scouted</h1>
    </section>
   </div>
  </div>
 </DashboardLayout>
)
}



export default Home;