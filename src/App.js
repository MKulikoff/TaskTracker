import { useState } from 'react/cjs/react.development';
import './App.css';
import Header from './Header/Header';
import AddTask from './Tasks/AddTask/AddTask'
import Task from './Tasks/Task/Task';


function App() {

  // const [tasks, setTasks] = useState([])

  return (
    <div className="App">
      <div className="container">
       <Header title="Task Tracker" btnText="Add"/>
       <AddTask />
       <Task/>
      </div>
    </div>
  );
}

export default App;
