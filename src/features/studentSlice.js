import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    students: [],
    name: '',
    id: '',
    edit: {},
    disabled: false
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
        setDisabled: (state, action) => {
            state.disabled = action.payload
        },
        setEdit: (state, action) => {
            state.edit = action.payload
        },
        addStudent: (state, action) => {
            if(state.edit.id || state.edit.name){
                const updatedStudent = {
                    ...state.edit,
                    id: state.id,
                    name: state.name
                }
                const indexEdited = state.students.findIndex((student) => student.id === state.edit.id)
                const updatedStudents = [...state.students]
                updatedStudents[indexEdited] = updatedStudent
                state.students = [...updatedStudents]
                state.edit = {}
                state.id = ''
                state.name = ''
            } else{
                state.students = [...state.students, action.payload]
                state.id = ''
                state.name = ''
            }
        },
        deleteStudent: (state, action) => {
            const filteredStudents = state.students.filter((student) => student.id !== action.payload)
            state.students = [...filteredStudents]
            if(state.edit.id){
                state.edit = {}
                state.id = ''
                state.name = ''
            }
        }
    }
})

export const { setValueName, setValueId, setDisabled, addStudent, setEdit, deleteStudent } = studentSlice.actions
export default studentSlice.reducer