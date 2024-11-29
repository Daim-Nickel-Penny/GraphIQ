import { create } from "zustand";

interface ITogglePresetStore {
  isPresetOpen: boolean;

  // Getters
  getIsOpen: () => boolean;

  // Setters
  setIsOpen: (isOpen: boolean) => void;
}

export const useTogglePresetStore = create<ITogglePresetStore>((set, get) => ({
  isPresetOpen: false,

  getIsOpen: () => {
    return get().isPresetOpen;
  },

  setIsOpen: (isPresetOpen: boolean) => {
    set({ isPresetOpen });
  },
}));
