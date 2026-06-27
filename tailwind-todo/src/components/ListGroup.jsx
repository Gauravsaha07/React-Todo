import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({ todos, removeTodo, editTodo }) => {
    return (
        <ul className='my-4'>
            {
                todos.map(todo => <ListItem key={todo.id} todo={todo} removeTodo={removeTodo} editTodo={editTodo} />)
            }
        </ul>
    )
}

export default ListGroup
