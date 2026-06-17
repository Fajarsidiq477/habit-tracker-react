import { createContext } from "react";

type HabitContextProps = {
    habits: any,
    dispatch: any,
    query: string,
    category: string,
    setQuery: (query: string) => void,
    setCategory: (category: string) => void
}


export const HabitContext = createContext<HabitContextProps | null>(null)