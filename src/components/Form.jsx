import React from 'react'

function Form({setInputText, todoTypes, todos, setTodos, inputText, setStatus}){
    // todoTypes, 
    
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
        // return e.target.value
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, {text: inputText, completed: false, id: (todos.length + 1)}
        ])
        setInputText('')
    }
    const handleStatusChange = (e) => {
        setStatus(e.target.value.toLowerCase())
    }
    // const todoTypes = ['All', 'Uncompleted', 'Completed', 'Others']
    return (
        <div className="form">
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo" onChange={handleStatusChange}>
                        {todoTypes.map(function(type, index){
                            return <option value={type} key={index}>{type}</option>
                        })}
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form