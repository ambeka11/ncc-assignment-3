import StudentContext from '../context/StudentContext';
import React, { useContext } from 'react'

export const StudentInfoProfile = () => {
  const student = useContext(StudentContext);
  return (
    <div className='card'>
      <div className='card-header'>
        <h4>Student Details</h4>
      </div>
      <div className='card-body'>   </div>
         <div className='text-center'>
            <img src={student.profilePic} alt={student.name} className='img-fluid rounded-circle' style={{width: '150px'}} />
     </div>
      <h3 className='text-center'>{student.name}</h3>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>Location:</strong> {student.location}</p>
    </div>
  )
}

export default StudentInfoProfile;