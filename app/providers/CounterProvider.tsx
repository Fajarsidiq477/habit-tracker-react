"use client"

import { useReducer } from "react"
import { CounterContext } from "../contexts/CounterContext"

type Action =
    | { type: "increment" }
    | { type: "decrement" }
    | { type: "reset" }

function reducer(state: number, action: Action) {
    switch (action.type) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return 0
        default:
            return state
    }
}

type CounterProviderProps = {
    children: React.ReactNode
}

export default function CounterProvider({ children }: CounterProviderProps) {
    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <CounterContext.Provider
            value= {{ count, dispatch }}
        >
            { children }
        </CounterContext.Provider>   
    )
}