import { NextPage } from "next";
import { DashboardLayout, PageTitle, LocationForm } from "../../components";
import { Icon } from '@iconify/react';
import { useLocations } from "../../hooks";
import Head from "next/head";

const Dashboard: NextPage = () => {
  const locations = useLocations()

 return (<DashboardLayout>
   <PageTitle title="Locations" description="Welcome back! Now let's find the next best thing" />
   <Head>
     <title>Locations - CNSA</title>
   </Head>
   <div className="flex flex-col mt-2 lg:flex-row border rounded-xl h-[20rem] bg-corner mx-auto bg-cover bg-right-bottom text-white max-w-screen-2xl w-full items-center">
      <span className="bg-gradient-to-r justify-center h-full flex flex-col text-left gap-4 items-left from-black self-bottom rounded-l-2xl pl-7 pb-12 w-full lg:w-2/3">
       <h1 className="text-5xl">The Stage</h1>
       <p>View, add or edit the places where the magic happens  </p>
       <LocationForm>
         <span className="py-3 px-5 max-w-xs rounded-2xl bg-green-900 hover:bg-green-700 flex items-center flex-row gap-2 "><Icon icon="game-icons:soccer-field"  className="text-2xl"/> CREATE NEW</span>
       </LocationForm>
     </span>
   </div>
   {
     locations.data && <>
      <h2>Our Locations</h2>
   <div className="overflow-x-auto mx-4 mt-3 bg-white rounded-2xl p-3">
  <table className="table table-compact w-full">
    <thead>
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
    </thead> 
       <tbody>
         {locations.data?.map((location) =>
           <tr key={location.id}> 
        <th></th> 
        <td>{location.name}</td> 
             <td>{ location.streetAddress}</td> 
             <td>{ location.city }</td> 
        <td>{ location.province }</td> 
             <td><Icon icon={`cif:${location.country}`} /></td> 
             <td>{location.postalCode}</td>
             <td>
               <LocationForm location={location}>
                 <span className="text-primary hover:underline">EDIT</span>
               </LocationForm>
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
  
  
 </DashboardLayout>)
}

export default Dashboard;