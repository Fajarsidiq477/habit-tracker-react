type Habit = { id: number, name: string }
type HabitListProps = { habits: Habit[], onDeleteHabit: (id: number) => void }

export default function HabitList({ habits, onDeleteHabit } : HabitListProps) {
    return (
        <ul>
            {habits.map(habit => (
                <li key={habit.id}>
                    <span>{habit.name}</span>
                    <button type="button"
                        onClick={() => onDeleteHabit(habit.id)}>Delete</button>    
                </li>
            ))}
        </ul>
    );
}