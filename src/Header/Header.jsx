import styles from './Header.module.css'

const Header = ({title, btnText}) => {
    return (
        <div className={styles.header}>
            <h1>{title}</h1>
            <button className={styles.btn}>{btnText}</button>
        </div>
    )
}

export default Header; 