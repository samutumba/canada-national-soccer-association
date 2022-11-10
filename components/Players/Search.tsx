import { Icon } from '@iconify/react';

export const SearchPlayers = () => {

 return (<div className="bg-white w-full rounded-lg flex flex-col flex-wrap gap-2 justify-center p-2">
  <input type="text" placeholder="Find player" className="input w-full max-w-2xl mx-auto" />
  
  <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th>Name</th> 
        <th>Team</th> 
        <th>Position</th> 
        <th>Date of Birth</th> 
        <th>Appearances</th> 
      <th>G/A</th>
      <th></th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <td>Cy Ganderton</td> 
        <td>Ontario Tech University</td> 
        <td>Midfielder</td> 
        <td>12/16/2001</td> 
        <td>26</td> 
      <td>5</td>
      <td><label className="swap">
  <input type="checkbox" />
  <div className="swap-on"><Icon icon="carbon:view" /></div>
  <div className="swap-off"><Icon icon="carbon:view-off-filled" /></div>
</label></td>
     </tr>
    </tbody>
    </table>
     </div>
 </div>)
}

