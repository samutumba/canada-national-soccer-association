import { Icon } from '@iconify/react';
import _ from 'lodash';
import moment from 'moment';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { usePlayers } from '../../hooks';

export const SearchPlayers = () => {

  const [filter, setFilter] = useState('')
  const players = usePlayers()

  const list = useMemo(() => {
    if (players.data) {
      if (filter !== "") {
        return players.data.filter((p) => {
          if (p.name.toLowerCase().includes(filter.toLowerCase()) || p.city.toLowerCase().includes(filter.toLowerCase())) {
            return p
          }
        })
      } else {
        return players.data
    }

    } else {
       return []
    }
  }, [filter, players])

 return (<div className="bg-white font-paragraph w-full rounded-lg flex flex-col flex-wrap gap-2 justify-center p-2">
   <input type="text" placeholder="Find player" value={filter} onChange={(e) => {
     e.target.value ? setFilter(e.target.value) : setFilter('')
   }} className="input w-full max-w-2xl mx-auto" />
  
  <div className="overflow-x-auto">
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
           list.map((p, i) => <tr key={p.id}>
             <td>{ p.name }</td>
             <td className='capitalize'>{_.replace(p.position.toString(), '_', " ") }</td>
             <td>{ moment(p.dob).fromNow(true) } old</td>
             <td>{ p.gender}</td>
             <td><Link href={`/app/player/${p.id}`} >View</Link></td>
           </tr>)
         }
         
    </tbody>
    </table>
     </div>
 </div>)
}

