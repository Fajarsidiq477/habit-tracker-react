import { createContext } from "react"

type UserContextType = {
    name: string,
    role: string
}

export const UserContext = createContext<UserContextType | null>(null)