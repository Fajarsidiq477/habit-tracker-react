"use client"

import Habit_Hero from './components/Habit_Hero';
import Habit_Stats from './components/Habit_Stats';
import Habit_Form from './components/Habit_Form';
import Habit_Search from './components/Habit_Search';
import Habit_List from './components/Habit_List';
import { HabitProvider } from './providers/HabitProvider';

export default function Page() {
    
    return (
        <HabitProvider>
            <div className="space-y-8">

                <Habit_Hero></Habit_Hero>

                <Habit_Stats></Habit_Stats>

                <Habit_Form></Habit_Form>

                <Habit_Search></Habit_Search>

                <Habit_List></Habit_List>

            </div>
        </HabitProvider>
    );
}