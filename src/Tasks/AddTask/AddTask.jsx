import styles from './AddTask.module.css'
import { useState } from 'react'

const AddTask = (props) => {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [remind, setRemind] = useState(false);
    


    return (
        <form action="submit" onSubmit={(e) => {
            e.preventDefault(); 
            props.setTask(date)
        }} className={styles.add_form}>
            <div className={styles.form_control}>
                <label>Task</label>
                <input type="text" value={task} onChange={(e) => {
                    setTask(e.target.value)
                }} placeholder="Add Task" />
            </div>
            <div className={styles.form_control}>
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time"
                    value={date} onChange={(e) => {
                        setDate(e.target.value)
                    }}
                />
            </div>
            <div className={`${styles.form_control} ${styles.form_control_check}`}>
                <label>Set Reminder</label>
                <input type="checkbox" value={remind} onChange={(e) => {
                    setRemind(e.currentTarget.checked)
                }} />
            </div>
            <input type="submit" value="Save Task" className={`${styles.btn} ${styles.btn_block}`}/>
        </form>
    )
}

export default AddTask; 