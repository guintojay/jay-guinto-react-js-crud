import React, { useState } from 'react'

import TodoItem from './Todoitem'

const Todolist = () => {

    const [ state, setState ] = useState ({
        todo: '',
        todolist: []
    })

    const [edit, setEdit] = useState({
        editTodo:'',
        editIndex:''
    })
    const [isUpdate, setIsUpdate] = useState(false)

    const { todo, todolist } = state
    const { editTodo, editIndex } = edit
    
    const handleOnChangeEdit = (e) => {
        const { name, value } = e.target

        setEdit({...edit, [name]: value})
    }

    const handleOnClickEdit = (index) => {
        setIsUpdate(true)
        setEdit({...edit, editIndex: index})
    }

    const handleOnClickCancel = () => {
        setIsUpdate(false)
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setState({...state, [name]: value})
    }


    // Create
    const createTodo = () => {
        const list = todolist  // Array Current
        list.push(todo) // Array Current + Current Todo Input

        setState({ todo:'', todolist: list})

    }

    //Update
    const updateTodo = (index) => {
        const list = todolist  // Array Current
        list[index] = editTodo // Array Current + Current Todo Input

        setState({ ...state, todolist: list})

    }

    //Delete
    const deleteTodo = (index) => {
        const list = todolist  // Array Current
        list.splice(index, 1) // Array Current + Current Todo Input

        setState({todo:'', todolist: list})

    }

    return (
        <>
            <div className="todolist-main">
                <div className="form-wrapper">
                        <input 
                            type="text" 
                            name="todo"
                            placeholder="Create Todo List"
                            value={todo}
                            onChange={handleOnChange}
                         />
                        <button onClick={createTodo}>Add</button>
                </div>
                <div className="table-main">
                    <div className="header-wrapper">
                        <span>Todo Do</span>
                        <span>Action</span>
                    </div>
                    {
                        todolist.length ?
                            todolist.map((value, index) => (
                                <TodoItem
                                key={index}
                                index={index}
                                value={value}
                                deleteTodo={deleteTodo}
                                handleOnclickEdit={handleOnClickEdit}
                                />
                            ))  : <span>No Inputs Found</span>
                    }

                    {
                    isUpdate ?
                    <div className="form-wrapper">
                        <input 
                            type="text" 
                            name="editTodo"
                            placeholder="Update Todo"
                            value={editTodo}
                            onChange={handleOnChangeEdit}
                        />
                        <button onClick={()=> updateTodo(editIndex)}>Update</button>
                        <button onClick={handleOnClickCancel}>Cancel</button>
                    </div> :''
                    }

                </div>
            </div>
        </>
    )

}

export default Todolist