import { NextPage } from "next";
import { DashboardLayout, PageTitle  } from "../../components"
import { SquadCreate } from '../../components/Forms/Squad/Update';
import { useTeams } from "../../hooks";

const Home: NextPage = () => {
 const teams = useTeams()

 return (<DashboardLayout>
  <div>
  <PageTitle title="Teams" description="View Teams " />
  <div className="flex flex-col mt-2 lg:flex-row border rounded-xl h-[20rem] bg-stadium mx-auto bg-cover bg-right-bottom text-white max-w-screen-2xl w-full items-center">
   <span className="bg-gradient-to-r justify-center h-full flex flex-col text-left gap-4 items-left from-black self-bottom rounded-l-2xl pl-7 pb-12 w-full lg:w-2/3">
    <h1 className="text-5xl">Teamwork</h1>
    <p>The Top Performing teams</p>
    <SquadCreate>
     <span>
      CREATE
     </span>
    </SquadCreate>
   </span>
   </div>
   {
    teams.data && <>
     <h2>Our Locations</h2>
     <div className="overflow-x-auto mx-4 mt-3 bg-white rounded-2xl p-3">
      <table className="table table-compact w-full">
       <thead>
        <tr>
         <th></th>
         <th>Name</th>
         <th>Formation</th>
         <th>City</th>
         <th>Province</th>
         <th>Country</th>
         <th>Postal Code</th>
         <th></th>
        </tr>
       </thead>
       <tbody>
        {teams.data?.map((location) =>
         <tr key={location.id}>
          <th></th>
          <td>{location.squad.name}</td>
          <td>{location.formation}</td>
          <td>{location.Game?.attendance}</td>
          <td>{location.province}</td>
          <td><Icon icon={`cif:${location.country}`} /></td>
          <td>{location.postalCode}</td>
          <td>
         
          </td>
         </tr>)}
       </tbody>
       <tfoot>
        <tr>
         <th></th>
         <th>Name</th>
         <th>Street</th>
         <th>City</th>
         <th>Province</th>
         <th>Country</th>
         <th>Postal Code</th>
         <th></th>
        </tr>
       </tfoot>
      </table>
     </div>
    </>
   }
  </div>
 </DashboardLayout>
)
}

export default Home;