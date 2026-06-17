"use client"

import { useContext } from "react"
import { CounterContext } from "../contexts/CounterContext"

export default function Counter() {
    const context = useContext(CounterContext)

    if (!context) {
        throw new Error(
            "Counter must be used inside CounterProvider"
        )
    }

    const { count, dispatch } = context

    return (
        <>
            <h1>Count: {count}</h1>

            <button
                onClick={() =>
                    dispatch({ type: "increment" })
                }
            >
                +
            </button>

            <button
                onClick={() =>
                    dispatch({ type: "decrement" })
                }
            >
                -
            </button>

            <button
                onClick={() =>
                    dispatch({ type: "reset" })
                }
            >
                Reset
            </button>
        </>
    )
}