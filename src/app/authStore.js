import create from "zustand";
import { authUser } from "./../utils/apiServices";

const authStore = create((set) => ({
  userDetails: {},
  loading: false,
  error: false,
  fetch: async (data) => {
    try {
      set({ loading: true });
      const userData = await authUser(data);
      set({ userDetails: userData.data.data, loading: false });
    } catch (err) {
      set({ error: true, loading: false });
    }
  },
  resetError: () => set({ error: false }),
}));

export default authStore;
