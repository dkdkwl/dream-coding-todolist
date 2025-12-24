import React from 'react'
import styles from './TodoInput.module.css'

export default function TodoInput() {
  return (
    <div className={styles.todoInput}>
      <input 
        type="text" 
        placeholder="Add Todo" 
        className={styles.input}
      />
      <button type="button" className={styles.addButton}>Add</button>
    </div>
  )
}