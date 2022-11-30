import { NextPage } from "next";
import { DashboardLayout, PageTitle, SearchPlayers } from "../../components";
import React from "react";
import Head from "next/head";
import { PlayerForm } from "../../components/Forms/Player/Create";
import { Icon } from "@iconify/react";

const Home: NextPage = () => {

  return (<DashboardLayout>
    <div>
      <Head>
        <title>Players - CNSA</title>
      </Head>
      <PageTitle title="Players" description="Look for the next big thing" />
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
    </div>
 </DashboardLayout>
)
}

export default Home;