import { NextPage } from "next";
import { DashboardLayout, PageTitle } from "../../../components";
import { useInstitutions, usePlayers, useTeams } from "../../../hooks";
import { toast } from "react-hot-toast";
import { useSetRecoilState } from "recoil";
import { loadingState } from "../../../atoms";
import { useMemo, useState } from "react";
import { SelectInput } from "../../../components/Forms/Input";
import Head from "next/head";
import moment from "moment";
import _ from "lodash";
import Link from "next/link";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, Pie, PieChart } from "recharts";

const insert = (arr: (string | null)[], index: number, newItem: string) => [
 // part of the array before the specified index
 ...arr.slice(0, index),
 // inserted item
 newItem,
 // part of the array after the specified index
 ...arr.slice(index)
]

const Compare: NextPage = () => {
 const players = usePlayers().data
 const institutions = useInstitutions().data
 const teams = useTeams().data
 const setLoading = useSetRecoilState(loadingState)

 const [playerIds, setPlayerIds] = useState<(string|null)[]>([null, null, null])

 const options = players?.filter((p) => !playerIds.includes(p.id) && p).flatMap((p) => { return { label: p.name, value: p.id }}) || []

 const player1 = useMemo(() => {
  return playerIds.at(0) ? players?.filter((p) => p.id == playerIds.at(0) && p).at(0) : undefined
 }, [playerIds, players])

 const player2 = useMemo(() => {
  return playerIds.at(1) ? players?.filter((p) => p.id == playerIds.at(1) && p).at(0) : undefined
 }, [playerIds, players])

 const player3 = useMemo(() => {
  return playerIds.at(2) ? players?.filter((p) => p.id == playerIds.at(2) && p).at(0) : undefined
 }, [playerIds, players])

 const player1Events = player1?.GameEvent
 const player2Events = player2?.GameEvent
 const player3Events = player3?.GameEvent


 const player1Goals = player1Events?.filter((event) => { if (event.type === "goal") return event })?.length || 0
 const player2Goals = player2Events?.filter((event) => { if (event.type === "goal") return event })?.length || 0
 const player3Goals = player3Events?.filter((event) => { if (event.type === "goal") return event })?.length || 0

 const player1Yellows = player1Events?.filter((event) => { if (event.type === "yellow_card") return event })?.length || 0
 const player2Yellows = player2Events?.filter((event) => { if (event.type === "yellow_card") return event })?.length || 0
 const player3Yellows = player3Events?.filter((event) => { if (event.type === "yellow_card") return event })?.length || 0

 const player1Reds = player1Events?.filter((event) => { if (event.type === "red_card") return event })?.length || 0
 const player2Reds = player2Events?.filter((event) => { if (event.type === "red_card") return event })?.length || 0
 const player3Reds = player3Events?.filter((event) => { if (event.type === "red_card") return event })?.length || 0

 const data = [
  {
   name:( player2?.name || ""),
   yellow_cards: player2Yellows,
   red_cards: player2Reds
  },
  {
   name: (player1?.name || ""),
   yellow_cards: player1Yellows,
   red_cards: player1Reds
  },
  {
   name: (player3?.name || ""),
   yellow_cards: player3Yellows,
   red_cards: player3Reds
  }]

 const goalData = [
  {
   name: (player1?.name || ""),
   value: player1Goals
  },
  {
   name: (player2?.name || ""),
   value: player2Goals
  },
  {
   name: (player3?.name || ""),
   value: player3Goals
  },
 ]
 
 return (<DashboardLayout>
  <Head>
  <title>Compare Players</title>
  </Head>
  <PageTitle title="Compare Players" description="Who is better?" />
  <h1>Pick Players</h1>
  <div className="w-full h-12 flex flex-row items-center justify-between gap-1 mt-3 mx-4">

   <span className="w-3/12">
    <SelectInput
    name="Player One"
    options={options}
     callback={(p) => {
      const newP = insert(playerIds, 0, p)
      setPlayerIds(newP) }}
    />
   </span>
   <span className="w-3/12">
    <SelectInput
   name="Player Two"
   options={options}
     callback={(p) => { 
      const newP = insert(playerIds, 1, p)

      setPlayerIds(newP)
   }}
    />
   </span>
   <span className="w-3/12">
    <SelectInput
    name="Player Three"
    options={options}
     callback={(p) => {
      const newP = insert(playerIds, 2, p)

      setPlayerIds(newP)
     }}
   />
   </span>   
  </div>
  {
   player1 && <div>
    <h2>Comparision</h2>
    <table className="table w-full capitalize">
     <thead>
      <tr className="font-title">
       <th>Attribute</th>
       <th>{ player1.name }</th>
       <th>{player2?.name || ""}</th>
       <th>{player3?.name || ""}</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>Age</td>
       <td>{player1 && moment(player1?.dob).fromNow(true) + " old"}</td>
       <td>{player2 && moment(player2?.dob).fromNow(true) + " old"}</td>
       <td>{player3 && moment(player3?.dob).fromNow(true) + " old"}</td>
      </tr>
      <tr>
       <td>Sex</td>
       <td>{ player1.gender }</td>
       <td>{player2 && player2.gender}</td>
       <td>{player3 && player3.gender}</td>
      </tr>
      <tr>
       <td>Position</td>
       <td>{player1?.position && _.replace(player1?.position?.toString(), '_', " ")}</td>
       <td>{player2?.position && _.replace(player2?.position?.toString(), '_', " ")}</td>
       <td>{player3?.position && _.replace(player3?.position?.toString(), '_', " ")}</td>
      </tr>
      <tr>
       <td>City</td>
       <td>{player1?.city}</td>
       <td>{player2?.city}</td>
       <td>{player3?.city}</td>
      </tr>
      <tr>
       <td>Province</td>
       <td>{player1?.province}</td>
       <td>{player2?.province}</td>
       <td>{player3?.province}</td>
      </tr>
      <tr>
       <td>Team</td>
       <td>{player1?.Squad.at(0)?.name}</td>
       <td>{player2?.Squad.at(0)?.name}</td>
       <td>{player3?.Squad.at(0)?.name}</td>
      </tr>
      <tr>
       <td>Province</td>
       <td>{player1?.province}</td>
       <td>{player2?.province}</td>
       <td>{player3?.province}</td>
      </tr>
      <tr>
       <td>View</td>
       <td><Link href={`/app/player/${player1?.id}`}>View</Link></td>
       <td><Link href={`/app/player/${player2?.id}`}>View</Link></td>
       <td><Link href={`/app/player/${player3?.id}`}>View</Link></td>
      </tr>
     </tbody>
    </table>
    <h1>Card Distribution</h1>
    <div className="relative h-96 w-full">
     <ResponsiveContainer width="100%" height="100%">
      <LineChart
       width={500}
       height={300}
       data={data}
       margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
       }}
      >
       <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="name" />
       <YAxis />
       <Tooltip />
       <Legend />
       <Line type="monotone" dataKey="yellow_cards" stroke="#8884d8" activeDot={{ r: 8 }} />
       <Line type="monotone" dataKey="red_cards" stroke="#C5281C" />
      </LineChart>
     </ResponsiveContainer>
    </div>
    <h1>Goals</h1> 
    <div className="relative h-96 w-full">
     <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
       <Pie
        dataKey="value"
        isAnimationActive={false}
        data={goalData}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
       />
      
       <Tooltip />
      </PieChart>
     </ResponsiveContainer>
    </div>


   </div>
  }
  

 </DashboardLayout>)
}

export default Compare;