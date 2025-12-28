import React, { useContext } from 'react';
import styles from './TodoHeader.module.css';
import { DarkModeTestContext } from '../../context/DarkModeTestContext';

export default function TodoHeader({onFilter, filterState}) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeTestContext);
  console.log(filterState)
  return (
    <div className={styles.todoHeader}>
        <button className={styles.switchButton} type='button' onClick={toggleDarkMode}>
          {darkMode ? '🌙' : '☀️'}
        </button>
        <ul className={styles.todoButtonList}>
            <li><button className={`${styles.todoButton} ${filterState === 'all' && styles.active}`} onClick={()=>onFilter('all')} type="button">All</button></li>
            <li><button className={`${styles.todoButton} ${filterState === 'active' && styles.active}`} onClick={()=>onFilter('active')} type="button">Active</button></li>
            <li><button className={`${styles.todoButton} ${filterState === 'complete' && styles.active}`} onClick={()=>onFilter('complete')} type="button">Completed</button></li>
        </ul>
    </div>
  )
}
