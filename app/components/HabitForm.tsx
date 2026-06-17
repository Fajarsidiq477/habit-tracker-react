"use client"
import { useState } from "react"

type HabitFormProps = {
    onAddHabit: (text: string) => void
}

export default function HabitForm({ onAddHabit } : HabitFormProps) {
    const [text, setText] = useState('')

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        onAddHabit(text)

        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={text}
                onChange={e => setText(e.target.value)} />
                
            <button type="submit">Add</button>
        </form>
    )
}