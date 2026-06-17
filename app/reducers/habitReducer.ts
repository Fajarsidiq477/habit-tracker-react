type Habit = {
    id: number;
    name: string;
    category: string;
    target: number;
    completed: number;
}

type HabitAction =
    | {
        type: "ADD_HABIT"
        payload: Habit
    }
    | {
        type: "DELETE_HABIT"
        payload: number
    }
    | {
        type: "INCREASE_COMPLETED"
        payload: number
    }
    | {
        type: "DECREASE_COMPLETED"
        payload: number
    }
    | {
        type: "LOAD_HABITS"
        payload: Habit[]
    }

export function habitReducer(state: Habit[], action: HabitAction) {

    switch(action.type) {

        case "ADD_HABIT":
            return [...state, action.payload]


        case "DELETE_HABIT":
            return state.filter(
                habit => habit.id !== action.payload
            )


        case "INCREASE_COMPLETED": {
            const findHabitByID = state.find(
                habit => habit.id === action.payload
            )

            if (!findHabitByID) {
                return state
            }

            if(findHabitByID.completed < findHabitByID.target) {
                return state.map(habit =>
                    habit.id === action.payload
                        ? {
                            ...habit,
                            completed: habit.completed + 1
                        }
                        : habit
                )
            }

            return state
        }


        case "DECREASE_COMPLETED": {
            const findHabitByID = state.find(
                habit => habit.id === action.payload
            )

            if (!findHabitByID) {
                return state
            }

            if(findHabitByID.completed > 0) {
                return state.map(habit =>
                    habit.id === action.payload
                        ? {
                            ...habit,
                            completed: habit.completed - 1
                        }
                        : habit
                )
            }

            return state
        }


        case "LOAD_HABITS":
            return action.payload


        default:
            return state
    }
}