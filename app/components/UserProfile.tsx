"use client"

import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function UserProfile() {
    const user = useContext(UserContext)

    return (
        <h1>{user?.name} - {user?.role}</h1>
    )
}