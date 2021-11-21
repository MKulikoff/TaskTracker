import styles from './AddTask.module.css'
import { useState } from 'react'

const AddTask = ({ submitForm }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [remind, setRemind] = useState(false);

    return (
        <form action="submit" onSubmit={(e) => {
            e.preventDefault();
            if(!(text || day)) {
                alert('Please fill in all fields'); 
                return; 
            }
            submitForm({ text, day, remind }); 
            setText(''); 
            setDay(''); 
            setRemind(false); 
        }} className={styles.add_form}>
            <div className={styles.form_control}>
                <label>Task</label>
                <input type="text" value={text} onChange={(e) => {
                    setText(e.target.value)
                }} placeholder="Add Task" />
            </div>
            <div className={styles.form_control}>
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time"
                    value={day} onChange={(e) => {
                        setDay(e.target.value)
                    }}
                />
            </div>
            <div className={`${styles.form_control} ${styles.form_control_check}`}>
                <label>Set Reminder</label>
                <input type="checkbox" value={remind} checked={remind} onChange={(e) => {
                    setRemind(e.currentTarget.checked)
                }} />
            </div>
            <input type="submit" value="Save Task" className={`${styles.btn} ${styles.btn_block}`} />
        </form>
    )
}

export default AddTask;