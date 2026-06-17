import { HabitContext } from "../contexts/HabitContext"
import { useContext } from "react"

export default function Habit_Stats() {

    const { habits } = useContext(HabitContext)!

    const totalCompletedHabits = habits.map(
                                    habit => habit.completed >= habit.target ? 1 : 0)
                                    .reduce<number>((total, habit) => total + habit, 0)    

    type Habit = {
        id: number;
        name: string;
        target: number;
        completed: number;
        category: string;
    }

    function completionRate(habits: Habit[]) {
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
                    { totalCompletedHabits }
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