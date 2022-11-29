import { NextPage } from "next";
import { DashboardLayout, PageTitle } from "../../components"

const Home: NextPage = () => {
 return (<DashboardLayout>
  <PageTitle title="Teams" description="View Teams " />
 </DashboardLayout>
 )
}

export default Home;