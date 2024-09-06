import "bootstrap/dist/css/bootstrap.min.css";
import Student from "./components/Student";

const students = [
  { name: "Hari", age: 20, bio: "I am a computer science student with major focus on web development" },
  { name: "Joe", age: 22, bio: "I am a business student with major focus on marketing" },
  { name: "Ram", age: 21, bio: "I am a computer science student with major focus on data science" },
];


function App() {
  return (
    <div className="container-fluid">
        <Student />
    </div>
  );
}

export default App;