import { create } from "zustand";

type User = {
    email: string,
    id: string,
}

type Auth = {
    isUserAuth: boolean,
    setIsUserAuth: (isAuth: boolean) => void,
    user: null | User,
    setUser: (userData: User) => void,
}

export const useAuth = create<Auth>()((set) => ({
    isUserAuth: false,
    setIsUserAuth: (isAuth) => set(state => {
        return { isUserAuth: isAuth };
    }),
    user: null,
    setUser: (userData) => set(state => { return { user: userData } })
}));