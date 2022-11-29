import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Cookies from "js-cookie"
import { client } from "../lib/prisma"
import { Location, Player }from '../prisma/generated/prisma-client-js'

export const useUser = () => {
 return useQuery(['useUser'], () => {
  return {}
 })
}

export const useLocations = () => {
 return useQuery<Location[], unknown>(['locations'], async () => {
  
  const response = await axios.get('http://localhost:3000/api/data/location', {
   headers: {
    authorization: Cookies.get('auth')
   }
  })

  return response.data.locations
 })
}


export const usePlayers = () => {
 return useQuery<Player[], unknown>(['players'], async () => {

  const response = await axios.get('http://localhost:3000/api/data/player', {
   headers: {
    authorization: Cookies.get('auth')
   }
  })

  return response.data.players
 })
}

// export const useTeams = () => {
//  return useQuery(['teams'], async () => {
//   await client.$connect()
//   const teams = await client.team.findMany()
//   await client.$disconnect()
//   return teams
//  })
// }

// export const useInstitutions = () => {
//  return useQuery(['institutions'], async () => {
//   await client.$connect()
//   const locations = await client.institution.findMany()
//   await client.$disconnect()
//   return locations
//  })
// }

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