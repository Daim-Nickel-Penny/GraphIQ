/**Create a zustand store for storing model, temperature, and top_p values*/

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { GROQMODELDATA, IGroqModelData } from "../data/groqModelData";

interface IPresetsStore {
  models: IGroqModelData[];
  model: string;
  temperature: number;
  top_p: number;

  // Getters
  getModel: () => string;
  getAllModels: () => IGroqModelData[];
  getTemperature: () => number;
  getTopP: () => number;

  // Setters
  setModel: (model: string) => void;
  setTemperature: (temperature: number) => void;
  setTopP: (top_p: number) => void;
}

export const usePresetsStore = create<IPresetsStore>()(
  persist(
    (set, get) => ({
      models: GROQMODELDATA,
      model: GROQMODELDATA[0]?.id || "",
      temperature: 0.7,
      top_p: 0.9,

      getModel: () => {
        return get().model;
      },
      getAllModels: () => {
        return get().models;
      },
      getTemperature: () => {
        return get().temperature;
      },
      getTopP: () => {
        return get().top_p;
      },

      setModel: (model: string) => {
        set({ model });
      },

      setTemperature: (temperature: number) => {
        set({ temperature });
      },

      setTopP: (top_p: number) => {
        set({ top_p });
      },
    }),
    {
      name: "presets-store", // Key for localStorage
    }
  )
);
