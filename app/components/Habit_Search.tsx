import { useContext, useEffect, useState } from "react"
import { HabitContext } from "../contexts/HabitContext"

export default function Habit_Search() {
    const { query, setQuery, category, setCategory } = useContext(HabitContext)!

    return (
        <section className="flex flex-col gap-4 md:flex-row">
            <input
                type="text"
                placeholder="Search habits..."
                className="flex-1 rounded-xl border border-slate-300 px-4 py-3"
                onChange={e => setQuery(e.target.value)}
                value={query}
            />

            <select
                className="rounded-xl border border-slate-300 px-4 py-3"
                onChange={e => setCategory(e.target.value)}
                name="category"
                value={category}
            >
                <option>All Categories</option>
                <option>Health</option>
                <option>Study</option>
                <option>Work</option>
                <option>Worship</option>
            </select>
        </section>
    )
}