import React from 'react'
import styles from './TodoHeader.module.css'

export default function TodoHeader() {
  return (
    <div className={styles.todoHeader}>
        <button className={styles.switchButton} type='button'>☀️</button>
        <ul className={styles.todoButtonList}>
            <li><button className={styles.todoButton} type="button">All</button></li>
            <li><button className={styles.todoButton} type="button">Active</button></li>
            <li><button className={styles.todoButton} type="button">Completed</button></li>
        </ul>
    </div>
  )
}
