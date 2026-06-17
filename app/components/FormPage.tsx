"use client"

import { useState } from "react";

export default function FormPage() {
    const [form, setForm] = useState({
        name: '',
        age: ''
    })

    function handleSubmit(e) {
        e.preventDefault()

        console.log(form)
    }

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>

            <form onSubmit={ handleSubmit }>
                <div>
                    <input 
                        type="text" 
                        value={form.name} 
                        onChange={handleChange}
                        name="name"
                        placeholder="Masukkan Nama" />
                </div>

                <div>
                    <input 
                        type="number"
                        value={form.age}
                        onChange={handleChange}
                        name="age"
                        placeholder="Masukkan Umur" />
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

   

