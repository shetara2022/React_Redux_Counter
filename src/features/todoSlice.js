import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            return { items: [...state.items, action.payload] }
        },
        removeItem: (state, action) => {
            let array = [...state.items]
            let index = action.payload
            if (index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        },
        clearToDo: () => {
            return { items: [] }
        }
    }
})

export const { addToDo, removeItem, clearToDo } = todoSlice.actions

export default todoSlice.reducer
