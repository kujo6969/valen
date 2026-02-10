import { create } from "zustand";

export const useTextStore = create((set) => ({
  initialText: "Will you be my valentine?🥺🥺🥺",
  updateInitialText: () =>
    set((state) => ({ initialText: (state.initialText = "You will be my valentine!!😈😈😈") })),
}));

export const useIsYesStore = create((set) => ({
  isYes: false,
  updateIsYes: () => set((state) => ({ isYes: (state.isYes = true) })),
}));
