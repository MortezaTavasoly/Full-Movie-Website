import { WrapperText } from "@/components/ui/atoms";
import { Tab } from "@/components/ui/organisms";
import { Component, useState } from "react";
import { UserInformations } from "./userInformations";

function Profile() {
  const showProfileInformation = useState(true);
  const tabItems = [
    {
      id: 1,
      key: "ProfileInformation",
      text: "Profile Informations",
      classes: "!text-[var(--theme-base-white)]",
      event: () => {
        console.log("this is the item one event");
      },
    },
    {
      id: 2,
      key: "WatchList",
      text: "Watch List",
      event: () => {
        console.log("this is the item two event");
      },
    },
    {
      id: 3,
      key: "Comments",
      text: "Comments",
      event: () => {
        console.log("this is the item two event");
      },
    },
    {
      id: 4,
      key: "Tickets",
      text: "Tickets",
      event: () => {
        console.log("this is the item two event");
      },
    },
  ];

  return (
    <div className="flex items-center justify-center !my-2 !px-5 w-full ">
      <div className="w-full">
        <div className=" w-full h-40 !border !border-[var(--theme-base-light)]"></div>

        <Tab id={1} items={tabItems} type="vertical">
          <div key="ProfileInformation">
            <UserInformations />
          </div>
          <div key={"WatchList"}>this is watch list</div>
          <div key={"Comments"}>this is Comments list</div>
          <div key={"Tickets"}>this is Tickets list</div>
        </Tab>
      </div>
    </div>
  );
}

export default Profile;
