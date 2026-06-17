type AddHabitButtonProps = {
  onAdd: () => void
}

export default function AddHabitButton({
  onAdd,
}: AddHabitButtonProps) {
  console.log("Button Render")

  return (
    <button onClick={onAdd}>
      Add Habit
    </button>
  )
}