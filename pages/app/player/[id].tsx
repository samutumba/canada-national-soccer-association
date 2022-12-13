import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from 'next/router'
import { useEffect, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useSetRecoilState } from "recoil";
import { loadingState } from "../../../atoms";
import { DashboardLayout, PageTitle } from "../../../components";
import { ActionSpeedDial } from "../../../components/SpeedDial";
import { useInstitutions, usePlayers, useTeams } from "../../../hooks";
import { Icon } from '@iconify/react';
import moment from "moment";
import _ from "lodash";
import Link from "next/link";
import { faker } from "@faker-js/faker/locale/en_CA";

const Home: NextPage = () => {
 const router = useRouter()
 const { id } = router.query
  const players = usePlayers().data
  const institutions = useInstitutions().data
  const teams = useTeams().data
 const setLoading = useSetRecoilState(loadingState)

 const player = useMemo(() => {

  return players ? players.filter((p) => { if(p.id === id) return p }).at(0) : undefined

 }, [players, id])

  const institution = institutions?.filter((i) => { if (i.id == player?.Squad.at(0)?.institutionId) return i }).at(0)
  const team = teams?.filter((t) => t.squadId == player?.Squad.at(0)?.id && t)
  const goal = player?.GameEvent.filter((event) => { if (event.type === "goal") return event })?.length || 0
  const yellows = player?.GameEvent.filter((event) => { if (event.type === "yellow_card") return event })?.length || 0
  const reds = player?.GameEvent.filter((event) => { if (event.type === "red_card") return event })?.length || 0

 useEffect(() => {
  player ? setLoading(false) : setLoading(true)
 }, [player])

 return (<DashboardLayout>
  <Head>
   <title>{player?.name || ""} - CNSA</title>
  </Head>
   <PageTitle title={player?.name || ""} description="Player Profile" />
   
   <div className="w-full row capitalize">
     <table className="lg:w-6/12 w-full capitalize">
       <tbody className="">
         <caption><h2>Player</h2></caption>
       <tr className="pb-4">
           <td className="">Age</td>
           <td className="">{moment(player?.dob).fromNow(true)} old</td>
         </tr>
         <tr className="pb-4">
           <td className="">Nationality</td>
           <td className=""><Icon icon="cif:ca" /></td>
         </tr>
         <tr className="pb-4">
           <td className="">Sex</td>
           <td className="">{ player?.gender }</td>
         </tr >
         <tr className="pb-4">
           <td className="">Position</td>
           <td className=""> {player?.position && _.replace(player?.position?.toString(), '_', " ")}</td>
         </tr>
          <tr>
           <td className="">Phone</td>
           <td className="">{ player?.phone } </td>
         </tr>
         <tr>
           <td className="">City</td>
           <td className="">{player?.city} </td>
         </tr>
         <tr>
           <td className="">Province</td>
           <td className="">{player?.province} </td>
         </tr>
         <tr>
           <td className="">Program</td>
           <td className=""> Unknown </td>
         </tr>

    </tbody>
     </table>
     <div className={`lg:w-1/3 w-full bg-[${player?.Squad.at(0)?.homeColor}] text-[${player?.Squad.at(0)?.awayColor}] col gap-2 items-center justify-center capitalize`}>
       <h2>{player?.Squad.at(0)?.name}</h2>
       <h3>{institution?.name}</h3>
       <h3>{institution?.category}</h3>
       <h3>{institution?.address}</h3>
       <h3>{institution?.city }</h3>
       <h3>{institution?.province}</h3>
       <h3>{institution?.postal_code}</h3>
       <button><Link href="/app/game/2d56afcb-5d44-4cca-a4f8-8d5b33f0e1a1">View Last </Link></button>
     </div>
   </div>
   <h1 className="mt-4 mb-1">Statistics</h1>
   <div className="h-42 ">
     <div className="stats shadow h-36 w-full">

       <div className="stat">
         <div className="stat-figure text-primary">
           <Icon icon="mdi:shoe-cleat" className="text-5xl" />
         </div>
         <div className="stat-title">Total Goals</div>
         <div className="stat-value text-primary">{(player?.GameEvent?.filter((event) => { if (event.type === "goal") return event })?.length || 0) + goal}</div>
         <div className="stat-desc">{(player?.GameEvent?.filter((event) => { if (event.type === "goal") return event })?.length || 0) + goal > goal && "Top Scorer"}</div>
       </div>

       <div className="stat">
         <div className="stat-figure text-red-400">
           <Icon icon="twemoji:yellow-square" className="text-5xl" />
         </div>
         <div className="stat-title">Yellow Card</div>
         <div className="stat-value text-primary">{(player?.GameEvent?.filter((event) => { if (event.type === "yellow_card") return event })?.length || 0) + yellows}</div>
         <div className="stat-desc">{(player?.GameEvent?.filter((event) => { if (event.type === "yellow_card") return event })?.length || 0) + yellows > yellows && "Most This Season"}</div>
       </div>


       <div className="stat">
         <div className="stat-figure text-red-400">
           <Icon icon="twemoji:red-square" className="text-5xl" />
         </div>
         <div className="stat-title">Red Card</div>
         <div className="stat-value text-primary">{(player?.GameEvent?.filter((event) => { if (event.type === "red_card") return event })?.length || 0)}</div>
         <div className="stat-desc">{(player?.GameEvent?.filter((event) => { if (event.type === "red_card") return event })?.length || 0) > 0 && "Most This Season"}</div>
       </div>
     </div>
   </div>

   <h1 className="mt-4 mb-1">Team mates</h1>
   <table className="table table-compact w-full">
     <thead>
       <tr className="font-title">
         <th>Name</th>
         <th>Position</th>
         <th>Date of Birth</th>
         <th>Gender</th>
         <th></th>
         <th></th>
       </tr>
     </thead>
     <tbody>
       {
         team?.at(0)?.starters.filter((p) => p.id !== player?.id && p).map((p, i) => <tr key={p.id}>
           <td>{p.name}</td>
           <td className='capitalize'>{_.replace(p.position.toString(), '_', " ")}</td>
           <td>{moment(p.dob).fromNow(true)} old</td>
           <td>{p.gender}</td>
           <td><Link href={`/app/player/${p.id}`} >View</Link></td>
         </tr>)
       }

     </tbody>
   </table>


  
  <ActionSpeedDial actions={[{
   title: "Request Interview",
   icon: <Icon icon="material-symbols:chat-bubble-outline" className="text-5xl"/>,
   onClick: () => toast.success("Interview Requested")
  }, {
    title: "Offer Scholarship",
   icon: <Icon icon="material-symbols:school-outline" className="text-5xl"/>,
    onClick: () => toast.error("Please add to scouting list first")
   },
   {
    title: "Scout",
    icon: <Icon icon="ph:binoculars" className="text-4xl"/>,
    onClick: () => toast.success("Added to List")
   }]} />
 </DashboardLayout>)
}

export default Home;