type HabitSummaryProps = { totalHabits: number, completedHabits: number, notcompletedHabits: number };

export default function HabitSummary({ totalHabits, completedHabits, notcompletedHabits } : HabitSummaryProps) {
    return (
        <div>
            <p>Completed Habits: {completedHabits}</p>
            <p>Not Completed Habits: {notcompletedHabits}</p>
            <p>Total Habits: {totalHabits}</p>
        </div>
    );
}