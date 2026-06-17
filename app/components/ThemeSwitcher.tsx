import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export default function ThemeSwitcher() {
    const theme = useContext(ThemeContext)

    function toggleTheme() {
        theme?.setTheme(theme?.theme === "light" ? "dark" : "light")
    }

    return (
        <>
            <p>Current Theme: {theme?.theme}</p>

            <button onClick={() => toggleTheme()}>Toggle Theme</button>
        </>
    )
}