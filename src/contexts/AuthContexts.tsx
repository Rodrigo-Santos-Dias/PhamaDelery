

// import { toastAlerta } from "../utils/toastAlerta"

import { ReactNode, createContext, useState } from "react"

import { login } from "../services/Services"
import UserLogin from "../models/UserLogin"

interface AuthContextProps {
    user: UserLogin
    handleLogout(): void
    handleLogin(user: UserLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserLogin>({
        id: 0,
        name: "",
        user: "",
        password: "",
        photo: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UserLogin) {
        setIsLoading(true)
        try {
            await login(`/users/logir`, userLogin, setUser)
            toastAlert('Você precisa estar logado', 'info');
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toastAlert('Você precisa estar logado', 'info');
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUser({
            id: 0,
            name: "",
            user: "",
            password: "",
            photo: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

function toastAlert(arg0: string, arg1: string) {
    throw new Error("Function not implemented.")
}
