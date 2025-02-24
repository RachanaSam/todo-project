import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDo from './components/AddToDo'
import ToDoList from './components/ToDoList'

function App() {
  const [confirmation, setConfirmation] = useState("");
  const [formData, setFormData] = useState({
    name: ""
  });
  function handleUserFormSubmit(e, data) {
    e.preventDefault();
    setFormData(data);
    fetch("https://dummyjson.com/products",
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    )
      .then(response => response.json())
      .then(() => {
        setConfirmation("Form submitted successfully!");
        setFormData({
          name: ""
                });
      }
      );
    console.log("Form submitted", data);

  }
  return (
    <>
      <AddToDo formData={formData} onFormSubmit={handleUserFormSubmit} confirmation={confirmation} />
      <ToDoList formData={formData} />
      </>
  )
}

export default App;
