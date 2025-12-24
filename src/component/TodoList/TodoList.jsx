import React from 'react'
import styles from './TodoList.module.css'

export default function TodoList({ id, text, checked }) {
  return (
    <ul className={styles.todoList}>
      <li className={styles.todoItem}>
        <input type="checkbox" id={`todoListitem${id}`} checked={checked} className={styles.checkbox} />
        <label htmlFor={`todoListitem${id}`} className={styles.label}>{text}</label>
        <button type='button' className={styles.deleteButton}>🗑️</button>
      </li>
    </ul>
  )
}
