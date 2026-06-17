import { useState } from "react";

export default function useCounter(initialValue: number) {
    const [count, setCount] = useState(initialValue)

    function increment() {
        setCount(prev => prev + 1)
    }

    function decrement() {
        setCount(prev => prev - 1)
    }

    function reset() {
        setCount(initialValue)
    }

    return {
        count,
        increment,
        decrement,
        reset
    }
}