import React from 'react'

const ListItem = ({ todo, removeTodo, editTodo }) => {
    return (
        <li className='my-2 border border-gray-300 p-2 flex items-center justify-between'>
            <div>
                <p className='text-xs my-2 text-gray-600'>#{todo.id}</p>
                <h1 className='text-xl font-semibold my-2'>{todo.text}</h1>
            </div>
            <div>
                <button onClick={() => editTodo(todo)} className='bg-yellow-600 hover:bg-yellow-700 cursor-pointer text-white rounded-lg px-2 py-1 text-sm mx-1'>Edit</button>
                <button onClick={() => removeTodo(todo.id)} className='bg-red-600 hover:bg-red-700 cursor-pointer text-white rounded-lg px-2 py-1 text-sm mx-1'>Delete</button>
            </div>
        </li>
    )
}

export default ListItem