import styles from './Header.module.css'

const Header = ({title, btnText, toggleAddForm}) => {
    return (
        <div className={styles.header}>
            <h1>{title}</h1>
            <button className={styles.btn} onClick={toggleAddForm}>{btnText}</button>
        </div>
    )
}

export default Header; 