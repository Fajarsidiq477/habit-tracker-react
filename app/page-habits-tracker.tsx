"use client"
import { useState, useEffect } from "react";

export default function Page() {
    type Habit = {
        id: number;
        name: string;
        done: boolean;
    }

    const initialHabits = [
        {id: 1, name: "Read Book", done: false},
        {id: 2, name: "Coding", done: false}
    ]

    const [habits, setHabits] = useState <Habit[]>(() => {
        const stored = localStorage.getItem('habits')

        if(stored) {
            return JSON.parse(stored)
        } 
            return initialHabits       
    })

    const [habit, setHabit] = useState('')

    useEffect(() => {
        localStorage.setItem("habits", JSON.stringify(habits))
        console.log("Habits updated");
    }, [habits]);

    function formSubmitHandler(e) {
        e.preventDefault()

        // generate dynamic id
        let dynamicID = 1
        const maxId = Math.max(...habits.map(habit => habit.id))

        if(habits.length > 0) {
            dynamicID = maxId + 1
        }

        setHabits([
            ...habits,
            {
                id: dynamicID,
                name: habit,
                done: false
            }
        ])

        setHabit('')
    }

    function toggleDone(id : number) {
        setHabits(habits.map(habit => (habit.id === id ? {...habit, done: !habit.done} : habit)))
    }

    function deleteHabit(id: number) {
        setHabits(habits.filter(habit => habit.id !== id))
    }

    return (
        <>
            <h1>Habits Tracker</h1>

            {
                habits.length === 0 ? 
                    <p>No Data Found...</p> : 
                    <ul>
                        {habits.map(habit => 
                            <li key={habit.id}>
                                {habit.name} | 
                                <button onClick={() => toggleDone(habit.id)}>{habit.done ? "Done" : "Not Done"}</button> | 
                                <button onClick={() => deleteHabit(habit.id)}>Delete</button>
                            </li>)}
                    </ul>
            }

            <form onSubmit={formSubmitHandler}>
                <input 
                    type="text"
                    value={habit}
                    onChange={e => setHabit(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </>
    )
    

    
}
