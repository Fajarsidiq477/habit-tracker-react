import { createContext } from "react";

type HabitContextProps = {
    id: number;
    name: string;
    target: number;
    completed: number;
}


export const HabitContext = createContext<HabitContextProps | null>(null)