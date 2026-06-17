"use client"
import { useState, useEffect } from 'react'

export default function Page() {
    const [email, setEmail] = useState('')
    function handleSubmit(e) {
        e.preventDefault()

        console.log(email)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={email}
                onChange={e => setEmail(e.target.value)} />

            <button type="submit">
                Save
            </button>
        </form>
    )

}