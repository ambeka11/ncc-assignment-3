
function StudentList({users}){
  return(
    <div className="card" >
      <div className="card-header">
        <h2>Students</h2>
      </div>
      <div className="card-body">
        <ul className="list-group">
          {users.map((user) => (
          <li className="list-group-item" key={user.id} onClick={showUserDetails(user)} >
              {user.name}
          </li>
          ))}
        </ul>
      </div>
  </div>
  );
}

export default StudentList;