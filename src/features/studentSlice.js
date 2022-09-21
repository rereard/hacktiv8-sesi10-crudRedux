import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    students: [],
    name: '',
    id: ''
}

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setValueName: (state, action) => {
            state.name = action.payload
        },
        setValueId: (state, action) => {
            state.id = action.payload
        },
        addStudent: (state, action) => {
            state.students = [...state.students, action.payload]
        }
    }
})

export const { setValueName, setValueId, addStudent } = studentSlice.actions
export default studentSlice.reducer