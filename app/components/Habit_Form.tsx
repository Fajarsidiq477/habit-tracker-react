import { useState, useContext } from "react"
import { HabitContext } from "../contexts/HabitContext"

export default function Habit_Form() {
    const { habits, dispatch } = useContext(HabitContext)
    

    const [form, setForm] = useState({
        id: 0,
        name: '',
        category: '',
        target: 0,
        completed: 0
    })

    function handleSubmit(e) {
        e.preventDefault()

        // validasi
        if(form.name === '') {
            alert('Habit name is required')
            return
        }

        if(form.category === '') {
            alert('Category is required')
            return
        }

        if(form.target === null || form.target === 0) {
            alert('Target is required')
            return
        }

        if(form.completed == null) {
            alert('Completed is required')
            return
        }

        // dispatch
        // generate dynamic ID sebelum dispatch
        const maxId =
            habits.length > 0
                ? Math.max(...habits.map(habit => habit.id))
                : 0;

        const dynamicID = maxId + 1;

        dispatch({type: "ADD_HABIT", payload: {...form, id: dynamicID}})

        // bersihkan form
        setForm({
            id: 0,
            name: '',
            category: '',
            target: 0,
            completed: 0
        })
    }

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-xl font-semibold">
                Add New Habit
            </h2>

            <form onSubmit={handleSubmit}>

                <div className="grid gap-4 md:grid-cols-3">

                    <input
                        type="text"
                        value={form.name}
                        placeholder="Habit name"
                        className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                        onChange={e => setForm({...form, name: e.target.value})}
                    />

                    <select
                        className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                        value={form.category}
                        onChange={e => setForm({...form, category: e.target.value})}
                    >
                        <option>-- Choose Category --</option>
                        <option value="Health">Health</option>
                        <option value="Study">Study</option>
                        <option value="Work">Work</option>
                        <option value="Worship">Worship</option>
                    </select>

                    <input
                        type="number"
                        value={form.target}
                        placeholder="Target"
                        className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                        onChange={e => setForm({...form, target: Number(e.target.value)})}
                        min="0"
                    />

                </div>

                <button
                    className="mt-4 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                    Add Habit
                </button>

            </form>

        </section>
    )
} 