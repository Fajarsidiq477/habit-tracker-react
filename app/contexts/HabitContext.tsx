import { createContext } from "react";

type Habit = {
    id: number
    name: string
    category: string
    target: number
    completed: number
}

type HabitContextProps = {
    habits: Habit[],
    dispatch: any,
    query: string,
    category: string,
    setQuery: (query: string) => void,
    setCategory: (category: string) => void
}


export const HabitContext = createContext<HabitContextProps | null>(null)