import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import avatar1 from "./../../assets/img/avatar.svg";
import avatar2 from "./../../assets/img/avatar2.svg";
import ticketStore from "./../../app/ticketStore";
import shallow from "zustand/shallow";
import Loader from "./../../components/loader";
import moment from "moment";
import { status_color_code } from "./../../utils/constants";
import commentStore from "./../../app/commentStore";

function TicketDetails(props) {
  const [comment, setComment] = useState("");
  let params = useParams();
  const fetchTicketById = ticketStore((state) => state.fetchTicketById);
  useEffect(() => {
    fetchTicketById(params.id);
  }, [fetchTicketById]);

  const { ticketDetails, isLodingTicketDetail, isErrorTicketDetail } =
    ticketStore((state) => state, shallow);
  const addComment = commentStore((state) => state.addComment);

  if (isLodingTicketDetail) {
    <Loader />;
  }

  console.log("ticketDetails=>", ticketDetails);

  return (
    <div className="w-full flex flex-col justify-cente items-center">
      <h1 className="mt-10">{`Ticked #${params.id}`}</h1>
      <div className="flex flex-col w-1/4 ">
        <h1 className="mt-5 text-xl font-bold	text-slate-600	">
          {ticketDetails?.queryInfo.title}
        </h1>
        <div className="flex flex-row items-center">
          <h3 className="mr-2 text-slate-500">
            {moment(ticketDetails?.queryInfo.createdOn).format("DD-MMM-YYYY")}
          </h3>
          <div
            className={`px-2 py-1 rounded-lg text-white`}
            style={{
              backgroundColor:
                status_color_code[ticketDetails?.queryInfo.status],
            }}
          >
            <h5 className="text-xs">{ticketDetails?.queryInfo.status}</h5>
          </div>
        </div>
        <p className="mt-5 text-slate-500">
          {ticketDetails?.queryInfo.description}
        </p>
        <textarea
          rows="4"
          cols={30}
          className="border-2 mt-5"
          placeholder="Add your comments"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          disabled={!comment}
          onClick={() =>
            addComment({
              queryId: params.id,
              content: comment,
            })
          }
          className={`self-start px-7 mt-2	py-1 ${
            comment ? "bg-blue-700" : "bg-slate-300	"
          } text-white`}
        >
          Add
        </button>
      </div>
      <div className="w-4/5	 bg-slate-300	mt-10" style={{ height: 0.5 }} />
      <div className="w-2/5">
        {ticketDetails?.comments.map((comment) => (
          <div className="w-full mt-2 flex flex-row items-center">
            <img src={avatar1} alt="google" className="w-10 h-10 mr-2" />
            <div className="w-full">
              <h1 className="text-zinc-600">
                {comment.commentedUesrInfo.name}
              </h1>
              <div className="flex justify-between">
                <p className="text-zinc-400	">{comment.content}</p>
                <span className="text-zinc-400	">
                  {moment(comment.createdOn).format("DD-MMM-YYYY")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TicketDetails;
