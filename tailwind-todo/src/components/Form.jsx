import React from 'react'

const App = ({ addTodo, edit, updateTodo }) => {

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
        <form className='border border-gray-600 p-4 rounded-lg'>
            <input type="text" placeholder='Enter Text' required className='border border-gray-600 w-full px-2 py-2 rounded-lg' />
            <button className='bg-green-600 w-full my-2 py-2 rounded-lg cursor-pointer text-white font-semibold hover:bg-green-600'>Save</button>
        </form>
    )
}

export default Form
