import InputText from "./InputText"
import Button from "./Button"
import { useSelector, useDispatch } from 'react-redux'
import { setValueId, setValueName, addStudent } from "../features/studentSlice"
const InputForm = () => {
    const studentName = useSelector((state) => state.student.name)
    const studentId = useSelector((state) => state.student.id)
    const dispatch = useDispatch()
    return(
        <div className="flex flex-col w-96 text-lg">
            <label>Student ID:</label>
            <InputText value={studentId} onChange={(e) => dispatch(setValueId(e.target.value))}/>
            <label>Student Name:</label>
            <InputText value={studentName} onChange={(e) => dispatch(setValueName(e.target.value))}/>
            <div className="flex justify-center">
                <Button title={'ADD STUDENT'} addStyle={"w-44 p-2 mt-3"} onClick={() => {
                    dispatch(addStudent({id: studentId, name: studentName}))
                    dispatch(setValueId(''))
                    dispatch(setValueName(''))
                }}/>
            </div>
        </div>
    )
}
export default InputForm