"use client"

import { clear } from "console"
import { useEffect, useRef, useState } from "react"

export default function App() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: ''
    })
        

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    function validate() {
        const newErrors = {
            name: "",
            email: "",
            password: ""
        }
        
        if(form.name.trim() === "") {
            newErrors.name = "Name is Required"
        }

        if(!form.email.trim()) {
            newErrors.email = "Email is Required. "
        }

        if(!form.email.includes('@')) {
            newErrors.email += "Type a right email format"
        }

        if(!form.password.trim()) {
            newErrors.password = "Password is Required. "
        }

        if(form.password.length < 8) {
            newErrors.password += "Password minimal is 8 characters"
        }

        return newErrors
    }
    

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const newErrors = validate()

        setErrors(newErrors)

        const hasErrors =
            Object.values(newErrors).some(
                (error) => error !== ""
            )
        
        if(hasErrors) {
            return
        }

        console.log("Submitted", form)

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>Name</p>
                <input name="name" value={form.name} type="text" onChange={handleChange} />
                { errors && <p>{errors.name}</p> }

                <p>Email</p>
                <input name="email" value={form.email} type="email" onChange={handleChange} />
                { errors && <p>{errors.email}</p> }


                <p>Password</p>
                <input name="password" type="password" value={form.password} onChange={handleChange} />
                { errors && <p>{errors.password}</p> }

                <button type="submit">Submit</button>
            </form>
        </>
    )
    
}