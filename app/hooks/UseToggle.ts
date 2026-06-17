import { useState } from "react"

export default function UseToggle(initialValue = false) {
    const [isOpen, setIsOpen] = useState(initialValue)

    function toggle() {
        setIsOpen(prev => !prev)
    }

    return {
        isOpen,
        toggle 
    }
}