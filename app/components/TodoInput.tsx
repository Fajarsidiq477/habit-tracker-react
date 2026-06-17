import { useState } from "react";

export default function TodoInput({ onAddTodo }) {
    const [text, setText] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        onAddTodo(text)

        setText("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={text}
                onChange={e => setText(e.target.value)} />

            <button type="submit">
                Add
            </button>
        </form>
    )
}