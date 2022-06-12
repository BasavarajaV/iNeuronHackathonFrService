import create from "zustand";
import { getTicketList, getTicketDetail } from "./../utils/apiServices";

const ticketStore = create((set) => ({
  result: null,
  loading: false,
  error: null,
  ticketDetails: null,
  isLodingTicketDetail: false,
  isErrorTicketDetail: false,
  fetchTickets: async () => {
    try {
      set({ loading: true });
      const res = await getTicketList();
      console.log("res====>", res);
      set({ result: res.data.data, loading: false });
    } catch (err) {
      set({ error: err, loading: false });
    }
  },
  fetchTicketById: async (id) => {
    try {
      set({ isLodingTicketDetail: true });
      const res = await getTicketDetail(id);
      set({ ticketDetails: res.data.data, isLodingTicketDetail: false });
    } catch (err) {
      set({ isErrorTicketDetail: err, isLodingTicketDetail: false });
    }
  },
}));

export default ticketStore;
