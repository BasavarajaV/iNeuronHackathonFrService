import React from "react";
import { useParams } from "react-router-dom";

function TicketDetails(props) {
  let params = useParams();
  return (
    <div className="w-full flex flex-col justify-cente items-center">
      <h1 className="mt-10">{`Ticked #${params.id}`}</h1>
      <div className="flex flex-col w-1/4 ">
        <h1 className="mt-5">Title</h1>
        <p className="mt-5">Description</p>
        <textarea
          rows="4"
          cols={30}
          className="border-2 mt-5"
          placeholder="Add your comments"
        />
        <button className="self-start">Add</button>
      </div>
    </div>
  );
}

export default TicketDetails;
