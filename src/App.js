import { useState, useEffect } from 'react/cjs/react.development';
import './App.css';
import Header from './Header/Header';
import AddTask from './Tasks/AddTask/AddTask'
import Task from './Tasks/Task/Task';

const req = 'http://localhost:3000/tasks';

function App() {

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const response = await fetch(req);
    const result = await response.json();
    setTasks(result);
  }

  const getTask = async (id) => {
    const response = await fetch(`${req}/${id}`);
    const result = await response.json();
    return result; 
  }

  //show Add Task

  const [showAddTask, setShowAddTask] = useState(false);
  const toggleAddForm = () => {
    setShowAddTask(!showAddTask)
  }

  //Tasks
  const [tasks, setTasks] = useState([])

  //Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await getTask(id); 
    const updatedTask = {...taskToToggle, remind: !taskToToggle.remind}; 
    
    const res = await fetch(`${req}/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(updatedTask) 
    })

    const data = await res.json(); 
    
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, remind: data.remind } : task
    ))
  }
  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`${req}/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json'
      },
    })
    
    setTasks(tasks.filter(task =>
      task.id !== id
    ))
  }

  // Add new Task
  const submitTask = async (task) => {
    const postData = await fetch(req, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      
      const data = await postData.json(); 
      
      setTasks([...tasks, data])
    }

  return (
    <div className="App">
      <div className="container">
        <Header title="Task Tracker" btnText={showAddTask ? 'Close' : 'Add Task'} showAddTask={showAddTask} toggleAddForm={toggleAddForm} />
        {showAddTask && <AddTask submitForm={submitTask} />}
        {tasks.length === 0 ? <h3>No task to show</h3> : <Task taskList={tasks} onToggle={toggleReminder} deleteTask={deleteTask} />}
      </div>
    </div>
  );
}

export default App;
