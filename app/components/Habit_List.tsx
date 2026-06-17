import { useContext } from "react";
import { HabitContext } from "../contexts/HabitContext";

export default function Habit_List() {
    const { habits, dispatch, query, category } = useContext(HabitContext)

    function getPercentage(habit: any) {
        return Math.floor((habit.completed / habit.target) * 100);
    }

    const filteredHabits = habits.filter(habit  => {

        const matchQuery =
            habit.name
                .toLowerCase()
                .includes(query.toLowerCase());

        const matchCategory =
            category === "" ||
            category === "All Categories" ||
            habit.category === category;

        return matchQuery && matchCategory;
    });

    return (
        <section className="space-y-4">

            {filteredHabits.map(habit => (
                <div key={habit.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                        <div>
                            <h3 className="font-semibold text-lg">
                                {habit.name}
                            </h3>

                            <p className="text-sm text-slate-500">
                                {habit.category}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">

                            <button type="button" 
                                className="h-10 w-10 rounded-lg bg-red-100 font-bold text-red-600 cursor-pointer"
                                onClick={() => dispatch({ type: "DECREASE_COMPLETED", payload: habit.id })}>
                                -
                            </button>

                            <span className="font-semibold">
                                {habit.completed} / {habit.target}
                            </span>

                            <button type="button"
                                className="h-10 w-10 rounded-lg bg-green-100 font-bold text-green-600 cursor-pointer"
                                onClick={() => dispatch({ type: "INCREASE_COMPLETED", payload: habit.id })}>
                                +
                            </button>

                            <button type="button" 
                                className="rounded-lg bg-slate-100 px-4 py-2 text-sm"
                                onClick={() => dispatch({ type: "DELETE_HABIT", payload: habit.id })}>
                                Delete
                            </button>

                        </div>

                    </div>

                    <div className="mt-4">
                        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
  
                            <div
                                className="h-full rounded-full bg-blue-600"
                                style={{
                                    width: `${getPercentage(habit)}%`
                                }}
                            />
                        </div>
                    </div>

                </div>
            ))}

        </section>
    )
}