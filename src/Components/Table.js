import { useSelector, useDispatch } from 'react-redux'
const Table = () => {
    const students = useSelector((state) => state.student.students)
    return(
        <div className='w-full mt-5 px-4'>
          <table className='xl:table-fixed w-full text-center'>
            <thead>
              <tr className="border-b-2 border-black">
                <th>Student ID</th>
                <th>Student Name</th>
              </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr className='h-14 border-b-2' key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
    )
}
export default Table