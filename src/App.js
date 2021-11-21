import { useState } from 'react/cjs/react.development';
import './App.css';
import Header from './Header/Header';
import AddTask from './Tasks/AddTask/AddTask'
import Task from './Tasks/Task/Task';


function App() {

  //show Add Task

  const [showAddTask, setShowAddTask] = useState(false); 
  const toggleAddForm = () => {
    setShowAddTask(!showAddTask)
  }


  //Tasks
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Get Up',
    day: 'Morning, 8:00',
    remind: true,
  },
  {
    id: 2,
    text: 'Breakfast',
    day: 'Morning, 10:00',
    remind: false,
  }
  ])

//Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, remind: !task.remind } : task
    ))
  }
//Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => 
      task.id !== id 
      ))
  }

// Add new Task
  const submitTask = (task) => {
    const id = Math.round(Math.random() * (1000 - 3 + 1) + 1);
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <div className="container">
        <Header title="Task Tracker" btnText={showAddTask ? 'Close' : 'Add Task'} showAddTask={showAddTask} toggleAddForm={toggleAddForm}/>
        {showAddTask && <AddTask submitForm={submitTask} />}
          {tasks.length == 0 ? <h3>No task to show</h3> : <Task taskList={tasks} onToggle={toggleReminder} deleteTask={deleteTask}/>}
      </div>
    </div>
  );
}

export default App;
