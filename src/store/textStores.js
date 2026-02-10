import { create } from "zustand";

const useTextStore = create((set) => ({
  initialText: "Nigga",
  updateInitialText: () =>
    set((state) => ({ initialText: (state.initialText = "Nigger") })),
}));

export default useTextStore;
