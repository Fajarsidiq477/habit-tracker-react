export function habitReducer(state, action) {
    switch(action.type) {
        case "ADD_HABIT":
            return [...state, action.payload]
        case "DELETE_HABIT":
            return state.filter(habit => habit.id !== action.payload)
        case "INCREASE_COMPLETED":
            let habit = state.find(habit => habit.id === action.payload)

            // if completed is less than target, increase completed
            if(habit.completed < habit.target) {
                return state.map(habit => (habit.id === action.payload ? 
                    {...habit, completed: habit.completed + 1} : habit
                ))
            }

            return state

        case "DECREASE_COMPLETED":
            habit = state.find(habit => habit.id === action.payload)

            // if completed is greater than 0, decrease completed
            if(habit.completed > 0) {
                return state.map(habit => (habit.id === action.payload ? 
                    {...habit, completed: habit.completed - 1} : habit
                ))
            }

            return state
        case "LOAD_HABITS":
            return action.payload
        default:
            return state
    }
}