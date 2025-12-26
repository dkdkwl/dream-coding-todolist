import React from 'react'
import styles from './TodoHeader.module.css'

export default function TodoHeader({onFilter}) {
  return (
    <div className={styles.todoHeader}>
        <button className={styles.switchButton} type='button'>☀️</button>
        <ul className={styles.todoButtonList}>
            <li><button className={styles.todoButton} onClick={()=>onFilter('all')} type="button">All</button></li>
            <li><button className={styles.todoButton} onClick={()=>onFilter('active')} type="button">Active</button></li>
            <li><button className={styles.todoButton} onClick={()=>onFilter('complete')} type="button">Completed</button></li>
        </ul>
    </div>
  )
}
