import React from 'react'

const TodoItem = props => {

    const {
        index,
        value,
        deleteTodo,
        handleOnclickEdit
    } = props

    return (
        <div className="row-wrapper">
            <span>{value}</span>
            <button onClick={() => handleOnclickEdit(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
        )

}

export default TodoItem