import { create } from "zustand"

interface CodeState {
  cache: string
  setCache: (cache: string) => void
}

export const useCode = create<CodeState>()((set) => ({
  cache: "",
  setCache: (cache) => set(() => ({ cache })),
}))
