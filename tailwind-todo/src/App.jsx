import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'


const App = () => {
  const [todos, setTodos] = useState([{
    id: 1,
    text: "For Sample"
  }])

  const [edit, setEdit] = useState({
    todo: {},
    isEdit: false
  })


  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }


  const editTodo = (todo) => {
    setEdit({
      todo: todo,
      isEdit: true
    })
  }

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo))
    setEdit({ todo: {}, isEdit: false })
  }

  return (
    <>
      <Navbar />
      <div className='p-16'>
        <Form />
        <ListGroup />
      </div >
    </>
  )
}

export default App
