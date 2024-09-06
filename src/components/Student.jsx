import React, { useState, useEffect } from 'react';
import StudentList from './StudentList';
import StudentContext from '../context/StudentContext';
import StudentDetails from './StudentDetails';

 const usersList=[
  {
    id: 1,
    name: "Ambeka",
    email: "prakash@nepalexample.com",
    phone: "+977 123 4567",
    location: "Kathmandu, Nepal",
    hobbies: ["Playing Guitar", "Coding", "Reading Books"],
    bio: "Hi, I'm Ambeka, a passionate computer science student with a love for coding and technology. I'm always eager to learn new things and take on challenging projects. In my free time, I enjoy playing guitar, reading, and experimenting with new programming languages.",
    // profilePic: assets.me,
  },
  {
    id: 2,
    name: "Rashika",
    email: "nabin@nepalexample.com",
    phone: "+977 987 6543",
    location: "Pokhara, Nepal",
    hobbies: ["Painting", "Hiking", "Swimming"],
    bio: "Hello, I'm Rashika. I'm a creative thinker who loves working on visual projects. I enjoy painting, hiking, and exploring new places. I am always looking for inspiration in nature and art.",
    // profilePic: assets.rashu,
  },
  {
    id: 3,
    name: "Swornima",
    email: "bibek@nepalexample.com",
    phone: "+977 555 6789",
    location: "Lalitpur, Nepal",
    hobbies: ["Gaming", "Cycling", "Photography"],
    bio: "Hey, I'm Swornima. I'm a tech enthusiast and gamer. I love cycling around the city and capturing moments with my camera. My passion for gaming has led me to explore game development as a hobby.",
    // profilePic: assets.swor,
  }
]

function Student(){
  const [users, setUsers] = useState(usersList);
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = selectedUser.name;
  }, [selectedUser]);

  const showUserDetails = (user) => {
    setSelectedUser(user);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
            placeholder="Search Student"
          />
        </div>
      </div>
    <div className="row mt-3">
        <div className="col-md-3">
          <StudentList
           users={users} 
           showUserDetails={showUserDetails}
           />          
        </div>
        <div className="col-md-6">
          <StudentContext.Provider value={selectedUser}>
           { selectedUser.id && (<StudentDetails />)}
          </StudentContext.Provider>
        </div>
    </div>
  </div>
  );
}

export default Student;