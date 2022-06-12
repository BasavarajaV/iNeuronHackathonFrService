import create from "zustand";
import { addComment } from "./../utils/apiServices";

const commentStore = create((set) => ({
  result: null,
  loading: false,
  error: null,
  addComment: async (data) => {
    try {
      set({ loading: true });
      const res = await addComment(data);
      set({ result: res, loading: false });
    } catch (err) {
      set({ error: err, loading: false });
    }
  },
}));

export default commentStore;
