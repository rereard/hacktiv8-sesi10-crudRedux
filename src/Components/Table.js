import { useSelector, useDispatch } from 'react-redux'
import { setValueId, setValueName, setEdit, deleteStudent } from "../features/studentSlice"
import Button from "./Button"
const Table = () => {
    const students = useSelector((state) => state.student.students)
    const dispatch = useDispatch()
    return(
        <div className='w-full mt-5 px-4'>
          <table className='xl:table-fixed w-full text-center'>
            <thead>
              <tr className="border-b-2 border-black">
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr className='h-14 border-b-2' key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>
                            <Button title="Edit" onClick={() => {
                                dispatch(setEdit(student))
                                dispatch(setValueName(student.name))
                                dispatch(setValueId(student.id))
                            }} addStyle={"w-44 p-1 mr-3"}/>
                            <Button title="Delete" onClick={() => dispatch(deleteStudent(student.id))} addStyle={"w-44 p-1"}/>
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
    )
}
export default Table