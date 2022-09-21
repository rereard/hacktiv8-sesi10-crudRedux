import InputText from "./InputText"
import Button from "./Button"
import { useSelector, useDispatch } from 'react-redux'
import { setValueId, setValueName, addStudent, setEdit, setDisabled } from "../features/studentSlice"
import { useEffect } from "react"
const InputForm = () => {
    const studentName = useSelector((state) => state.student.name)
    const studentId = useSelector((state) => state.student.id)
    const edit = useSelector((state) => state.student.edit)
    const disabled = useSelector((state) => state.student.disabled)
    const dispatch = useDispatch()
    useEffect(() => {
        if(studentName.length > 0 && studentId.length > 0){
          dispatch(setDisabled(false))
        }else{
          dispatch(setDisabled(true))
        }
    }, [studentName, studentId]);
    return(
        <div className="flex flex-col w-96 text-lg">
            <label>Student ID:</label>
            <InputText value={studentId} onChange={(e) => dispatch(setValueId(e.target.value))} isRequired={true}/>
            <label>Student Name:</label>
            <InputText value={studentName} onChange={(e) => dispatch(setValueName(e.target.value))} isRequired={true}/>
            <div className="flex justify-center">
                <Button title={edit.id ? 'EDIT STUDENT' : 'ADD STUDENT'} addStyle={"w-44 p-2 mt-3"} onClick={() => {
                    dispatch(addStudent({id: studentId, name: studentName}))}} isDisabled={disabled}/>
                {edit.id && <Button title='CANCEL' onClick={() => {
                    dispatch(setValueId(''))
                    dispatch(setValueName(''))
                    dispatch(setEdit({}))
                }} addStyle={"w-44 p-2 mt-3 ml-2"}/>}
            </div>
        </div>
    )
}
export default InputForm