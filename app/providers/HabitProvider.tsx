"use client"

import { useState, useReducer, useEffect } from "react";
import { HabitContext } from "../contexts/HabitContext";
import { habitReducer } from "../reducers/habitReducer";

type HabitProviderProps = {
    children: React.ReactNode
}
export function HabitProvider({ children }: HabitProviderProps) {
    const initialHabits = [
        {id: 1, name: "Read Book", target: 4, completed: 2, category: "Study"},
        {id: 2, name: "Coding", target: 3, completed: 0, category: "Study"}
    ];

    const [habits, dispatch] = useReducer(habitReducer, initialHabits );   
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('')

    useEffect(() => {
        const stored = localStorage.getItem("habits");

        if(stored) {
            dispatch({
                type: "LOAD_HABITS",
                payload: JSON.parse(stored)
            })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(
            "habits",
            JSON.stringify(habits)
        );

    }, [habits]);

    

    return (
        <HabitContext.Provider
            value={{
                habits,
                dispatch,
                query,
                setQuery,
                category, 
                setCategory
            }}
        >
            { children }
        </HabitContext.Provider>
    )
}