import { create } from "zustand";

interface LoadingChatStore {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const useLoadingChatStore = create<LoadingChatStore>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

export default useLoadingChatStore;
