import { NextPage } from "next";
import { DashboardLayout, PageTitle, SearchPlayers } from "../../components";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from "react";
import Head from "next/head";
import { PlayerForm } from "../../components/Forms/Player/Create";
import { Icon } from "@iconify/react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Home: NextPage = () => {
   const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
 };
 
  return (<DashboardLayout>
    <Head>
      <title>Players - CNSA</title>
    </Head>
  <PageTitle title="Players" description="Look for the next big thing" />
    <>
      <div className="flex flex-col mt-2 lg:flex-row border rounded-xl h-[35rem] bg-uclcross mx-auto bg-cover bg-bottom text-white max-w-screen-2xl w-full items-center">
        <span className="bg-gradient-to-r justify-center h-full flex flex-col text-left gap-4 items-left from-black self-bottom rounded-l-2xl pl-7 pb-12 w-full lg:w-2/3">
          <h1 className="text-5xl">The Stars</h1>
          <p>The Players that make the magic happen on the field </p>
          <PlayerForm>
            <span className="max-w-sm text-center gap-4 p-3 rounded-xl bg-primary text-white flex flex-row w-full">
              <Icon icon="game-icons:soccer-field" className="text-2xl" /> Create New
            </span>
          </PlayerForm>
        </span>
      </div>

      <SearchPlayers />
    </>
 </DashboardLayout>
)
}

export default Home;