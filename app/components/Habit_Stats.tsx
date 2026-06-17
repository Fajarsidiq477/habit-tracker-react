import { HabitContext } from "../contexts/HabitContext"
import { useContext } from "react"

export default function Habit_Stats() {

    const { habits } = useContext(HabitContext)!

    function completionRate(habits) {
        const totalTarget = habits.reduce((total, habit) => total + habit.target, 0);
        const totalCompleted = habits.reduce((total, habit) => total + habit.completed, 0);

        return Math.floor((totalCompleted / totalTarget) * 100) + '%';
    }

    return (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">
                    Total Habits
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                    { habits.length }
                </h2>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">
                    Completed
                </p>

                <h2 className="mt-2 text-3xl font-bold text-green-600">
                    { habits.filter(habit => habit.done).length }
                </h2>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">
                    Completion Rate
                </p>

                <h2 className="mt-2 text-3xl font-bold text-blue-600">
                    {/* calculate from sum of target, and sum of completed */}
                    { completionRate(habits) }
                </h2>
            </div>

        </section>
    )
} 