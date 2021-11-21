import { FaTimes } from 'react-icons/fa';
import styles from './Task.module.css'

const Task = ({ taskList, onToggle, deleteTask }) => {

    return (
        taskList.map((task) => (
            <div key={task.id} className={task.remind ? `${styles.task} ${styles.reminder}` : `${styles.task}`} onDoubleClick={() => {
                onToggle(task.id)
            }}> 
                <h3>{task.text} <FaTimes onClick={() => {
                    deleteTask(task.id)
                }}/> </h3>
                <p>{task.day}</p>
            </div>
        ))
    )
}

export default Task;