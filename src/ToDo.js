import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToDo, removeItem, clearToDo } from './features/todoSlice'

export default function ToDo() {
    // Call useSelector to grab the current value of our state variable
    // from the store, and assign it to a variable named "count"
    const items = useSelector((state) => state.todo.items)
    // And include the useDispatch hook...
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const renderItems = items.map((item, index) => <li key={index} onClick={() => dispatch(removeItem(index))}>{item}</li>)

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addToDo(input))
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {renderItems}
            </ul>
            <button onClick={() => dispatch(clearToDo())}>Clear</button>
        </div>
    )
}
