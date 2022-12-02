import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import { Location, Player, Team, Institution, Squad, Game, GameEvent }from '../prisma/generated/prisma-client-js'

export const useUser = () => {
 return useQuery(['useUser'], () => {
  return {}
 })
}

export const useLocations = () => {
 return useQuery<Location[], unknown>(['locations'], async () => {
  
  const response = await axios.get('/api/data/location', {
   headers: {
    authorization: getCookie('auth')
   }
  })

  return response.data.locations
 })
}


export const usePlayers = () => {
 return useQuery<Player[], unknown>(['players'], async () => {

  const response = await axios.get('/api/data/player', {
   headers: {
    authorization: getCookie('auth')
   }
  })

  return response.data.players
 })
}

export const useTeams = () => {
 return useQuery<(Team & {
  Game: Game | null;
  starters: Player[];
  squad: Squad;
 })[], unknown>(['teams'], async () => {
  const response = await axios.get('/api/data/team', {
   headers: {
    authorization: getCookie('auth')
   },
  });
  
  return response.data.teams
 })

 
}

export const useInstitutions = () => {
 return useQuery<(Institution & { Squad: Squad[] })[], unknown>(['institutions'], async () => {
  const response = await axios.get('/api/data/institution', {
   headers: {
    authorization: getCookie('auth')
   },
  });

  return response.data.institutions
 })
}

export const useGames = () => {
 return useQuery<(Game & {
 events: GameEvent[];
  team: Team[];
  location: Location;
 })[], unknown>(['games'], async () => {
  const response = await axios.get('/api/data/game', {
   headers: {
    authorization: getCookie('auth')
   },
  });

  return response.data.games
 })
}

// export const useCompetitions = () => {
//  return useQuery(['competitions'], async () => {
//   await client.$connect()
//   const locations = await client.competition.findMany({
//    include: {
//     season: true,
//     Squad: true
//    }
//   })
//   await client.$disconnect()
//   return locations
//  })
// }

//(Game & {
// events: GameEvent[];
// team: Team[];
// })[]