import { createContext } from "react";

type Habit = {
    id: number
    name: string
    category: string
    target: number
    completed: number
}

type HabitContextProps = {
    habits: Habit[]
    dispatch: any
    query: string
    setQuery: React.Dispatch<React.SetStateAction<string>>
    category: string
    setCategory: React.Dispatch<React.SetStateAction<string>>
}


export const HabitContext = createContext<HabitContextProps | null>(null)