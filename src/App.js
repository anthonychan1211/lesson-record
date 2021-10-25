import './App.css';
import Header from './Header';
import AddStudentForm from './AddStudentForm';
import Students from './Students';
import { useState } from "react"



function App() {
  
  const [students, setStudent] = useState([
    {
        id: 1,
        name: 'Sophia',
        instrument: "Violin",
        lesson: ['12 Feb', '19 Feb', '3 Mar'],
        tuition: 400
    },
    {
        id: 2,
        name: 'Jonathan',
        instrument: "Piano",
        lesson: ['14 Feb', '21 Feb', '6 Mar'],
        tuition: 475
    },
    {
        id: 3,
        name: 'Sun',
        instrument: "Theory",
        lesson: ['15 Feb', '25 Feb', '9 Mar', '15 Mar'],
        tuition: 250
    }
])

  const [showAddStudent, setShowAddStudent] = useState(false)
  return (
    

    <div className="container">
    
      <Header 
      onAdd={() => setShowAddStudent(!showAddStudent)}
      showAdd={showAddStudent}/>
      {showAddStudent && <AddStudentForm />}
      <Students students={students}/>
    </div>
  );
}

export default App;
