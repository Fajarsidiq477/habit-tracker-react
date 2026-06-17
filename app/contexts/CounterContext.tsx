import { createContext } from "react"

type CounterContextType = {
    count: number,
    dispatch: React.Dispatch<any>
}

export const CounterContext = createContext<CounterContextType | null>(null)
