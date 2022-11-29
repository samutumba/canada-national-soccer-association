import { NextPage } from "next";
import { DashboardLayout, PageTitle, SearchPlayers } from "../../components";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from "react";
import Head from "next/head";
import { PlayerForm } from "../../components/Forms/Player/Create";

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
  <div className="bg-slate-200 m-1 p-3 w-full flex flex-col gap-2 h-full rounded-lg">
   <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
   <Tabs value={value} onChange={handleChange} aria-label="Player tabs">
     
          <Tab label="Explore players" {...a11yProps(0)} />
          <Tab label="My Scout List" {...a11yProps(1)} />
          <Tab label="Statistics" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SearchPlayers />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PlayerForm >
          <span>
            Create Player
          </span>
        </PlayerForm>
      </TabPanel>
  </div>
 </DashboardLayout>
)
}

export default Home;