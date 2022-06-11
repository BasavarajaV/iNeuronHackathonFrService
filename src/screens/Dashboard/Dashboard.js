import React from "react";
import avatar from "./../../assets/img/avatar.svg";
import { Header } from "../../components";
import TicketList from "../TicketList";

function Dashboard() {
  //header bar
  return (
    <div>
      <Header />
      <TicketList />
    </div>
  );
}

export default Dashboard;
