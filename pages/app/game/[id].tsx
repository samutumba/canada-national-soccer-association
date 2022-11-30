import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { DashboardLayout, PageTitle } from "../../../components";
import { useGames, usePlayers, useTeams } from "../../../hooks"
import { useMemo } from "react"
import { PlayerScalarFieldEnumSchema } from "../../../validators/schemas/internals";
import { Icon } from '@iconify/react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Image from "next/image";

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

const Game: NextPage = () => {
 const router = useRouter()

  const games = useGames()
  const players = usePlayers()
  const teams = useTeams()
 
 const game = useMemo(() => {

  return games.data ?
   games.data.filter(game => game.id == router.query.id).at(0)
   :
   undefined 

 }, [games, router.query.id])

  const firstTeamGoals = useMemo(() => {
    let i = 0
    game?.events.forEach((gm) => {
      if (gm.type == 'goal') {
        players.data?.forEach((pl) => {
          if (pl.id == gm.playerId && teams.data?.filter(t => t.squadId == game.team.at(0)?.squadId).at(0)?.starters.flatMap(s => s.id).includes(pl.id)) {
            i++
          }
       })
      }
    })

    return i

  }, [game, players, teams.data])

  const secondTeamGoals = useMemo(() => {
    let i = 0
    game?.events.forEach((gm) => {
      if (gm.type == 'goal') {
        players.data?.forEach((pl) => {
          if (pl.id == gm.playerId && (teams.data?.filter(t => t.squadId == game.team.at(1)?.squadId).at(0)?.starters.flatMap(s => s.id).includes(pl.id) ) ) {
            i++
          }
        })
      }
    })

    return i

  }, [game, players, teams.data])

 
  return (<DashboardLayout>
    <>
  <PageTitle title="Locations" description="Welcome back! Now let's find the next best thing" />
  <Head>
   <title>Game - CNSA</title>
   </Head>
   {
     game && <>
       <div className="text-center p-2 w-full rounded-lg bg-red-600 text-white">
         {"Played at "+ game?.location.name}
       </div>
       <div className="flex flex-row gap-4 p-9 bg-slate-100 rounded-lg my-2 justify-between w-full items-center">
              <span className={`bg-[${teams.data?.filter(t => t.squadId == game.team.at(1)?.squadId).at(0)?.squad.homeColor}] w-10 h-10 rounded-full`}></span>
              <h2>{teams.data?.filter(t => t.squadId == game.team.at(0)?.squadId).at(0)?.squad.name}</h2>
              <h1>{firstTeamGoals}</h1>
         <span> - </span>
              <h1>{secondTeamGoals}</h1>
              <h2>
                {teams.data?.filter(t => t.squadId == game.team.at(1)?.squadId).at(0)?.squad.name}
           </h2>
              <span className={`bg-[${teams.data?.filter(t => t.squadId == game.team.at(1)?.squadId).at(0)?.squad.awayColor}] w-10 h-10 rounded-full`}></span>
          </div>
          <div className="flex flex-col gap-1">
            {game?.events.map((event) => {
              let icon = <Icon icon="fa6-solid:arrows-spin" className="text-red-500 inline text-3xl"  />
              if (event.type == 'goal') {
                icon = <Icon icon="ph:soccer-ball-fill" className="inline  text-3xl" />
              } else if (event.type == 'yellow_card') {
                icon = <Icon icon="fluent-emoji-flat:yellow-square" className="inline  text-3xl" />
              } else if (event.type == 'red_card') {
                icon = <Icon icon="twemoji:red-square" className="inline  text-3xl" />
              } else if (event.type == 'substitution_on'){
                icon = <Icon icon="fa6-solid:arrows-spin" className="text-green-700 inline  text-3xl"/>
              }


              return (<div key={event.id} className="m-2 p-2 capitalize flex flex-row gap-4 justify-center text-center items-center hover:bg-slate-300 hover:text-white">
                {icon} {`${event.type} - ${event.minute}'`}
              </div>)

            })}
          </div>
       <div className="flex flex-col lg:flex-row gap-4 justify-evenly">
            <span className=" prose ">
              <span className="relative ml-3 mb-5 w-full h-auto max-w-xs">
                <Image src="/images/lineup (1).png" alt="" layout="fill"   className="object-fit"/>
              </span>
              
           <label>Starters</label>
              <ol className=" prose ">
             {teams.data?.filter(t => t.squadId == game.team.at(0)?.squadId).at(0)?.starters.map((play) => <li key={play.id}>{ play.name }</li>)}
           </ol>
         </span>
            <span className=" prose ">
              <span className="relative w-full h-auto max-w-xs">
                 <Image src="/images/lineup (3).png" alt="" layout="fill" className="object-fit" />
              </span>
          
           <label>Starters</label>
              <ol  >
             {teams.data?.filter(t => t.squadId == game.team.at(1)?.squadId).at(0)?.starters.map((play) => <li key={play.id}>{play.name}</li>)}
           </ol>
           
         </span>
         
          </div>
          <div>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
              </PieChart>
            </ResponsiveContainer>
          </div>
       
     </>
      }
    </>
 </DashboardLayout>)
}

export default Game;