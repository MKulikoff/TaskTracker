import styles from './Task.module.css'

const tasks = [{
    id: 1,
    text: 'Get Up',
    time: '8:00'
},]

const Task = (props) => {

    return (
        tasks.map((task) => (
            <div key={task.id} className={styles.task} onDoubleClick={() => {
                
            }}> 
                <h3>{task.text}</h3>
            </div>
        ))
    )
}

export default Task;