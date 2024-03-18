import { create } from "zustand";

type Auth = {
    isUserAuth: boolean,
}

export const useAuth = create<Auth>()((set) => ({
    isUserAuth: false,
}));