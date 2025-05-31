import { create } from "zustand";

interface Types {
  imageURL: string;
  setImageURL: (data: string) => void;
  loading: boolean;
  setLoading: (data: boolean) => void;
}

export const useImageUploadStore = create<Types>((set) => ({
  loading: false,
  imageURL: "",
  setImageURL: (data) => set({ imageURL: data }),
  setLoading: (data) => set({ loading: data }),
}));
