"use client"

import { useState, useEffect } from "react"

export default function HabitTracker() {
    const initialHabits = [
        { id: 1, name: "Push Up", done: false },
        { id: 2, name: "Read Book", done: false },
        { id: 3, name: "Coding", done: false },
    ]

    const [habits, setHabits] = useState(null)

    function handleClick(id) {
        setHabits(habits.map(habit => ({
            ...habit,
            done: habit.id === id ? !habit.done : habit.done
        })))
    }

    useEffect(() => {
        const stored = localStorage.getItem('habits')

        if(stored) {
            setHabits(JSON.parse(stored))
        } else {
            setHabits(initialHabits)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("habits", JSON.stringify(habits))
        console.log("Habits updated");
    }, [habits]);


    if (!habits) {
        return <p>Loading ....</p>
    }

    return (
        <div>
            <h1>Habit Tracker</h1>
          
            <ul>
                {habits.map(habit => (
                    <li key={habit.id} style={{display: "flex", justifyContent: "left", gap: "1rem"}}>
                        <span>{habit.name}</span>
                        <button type="button" onClick={() => handleClick(habit.id)}>
                            {habit.done ? "Done" : "Not Done"}
                        </button>    
                    </li>
                ))}
            </ul>
            <p>Total Done: {habits.filter(habit => habit.done).length}</p>
            
        </div>
    )
}