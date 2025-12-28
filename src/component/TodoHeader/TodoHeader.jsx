import React from 'react'
import styles from './TodoHeader.module.css'

export default function TodoHeader({onFilter, filterState}) {
  console.log(filterState)
  return (
    <div className={styles.todoHeader}>
        <button className={styles.switchButton} type='button'>☀️</button>
        <ul className={styles.todoButtonList}>
            <li><button className={`${styles.todoButton} ${filterState === 'all' && styles.active}`} onClick={()=>onFilter('all')} type="button">All</button></li>
            <li><button className={`${styles.todoButton} ${filterState === 'active' && styles.active}`} onClick={()=>onFilter('active')} type="button">Active</button></li>
            <li><button className={`${styles.todoButton} ${filterState === 'complete' && styles.active}`} onClick={()=>onFilter('complete')} type="button">Completed</button></li>
        </ul>
    </div>
  )
}
