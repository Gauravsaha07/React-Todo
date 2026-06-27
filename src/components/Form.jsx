import React, { useEffect, useState } from 'react'

const Form = ({ addTodo, edit, updateTodo }) => {

    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        !edit.isEdit ?
            addTodo({ id: crypto.randomUUID(), text }) :
            updateTodo({ id: edit.todo.id, text })

        setText("")
    }


    useEffect(() => {
        setText(edit.todo.text)
    }, [edit])

    return (
        <form onSubmit={handleSubmit} className='border border-gray-400 p-4 rounded-md'>
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" className='border border-gray-500 w-full p-2 my-2 rounded-lg' placeholder='Enter Text' required />
            <button className='bg-green-500 w-full my-2 p-2 rounded-lg cursor-pointer text-white font-semibold hover:bg-green-600'>Save</button>
        </form>
    )
}

export default Form
