import React from 'react'
import styles from './TodoList.module.css'

export default function TodoList({todoList, onChecked, onDelete}) {
  return (
    <ul className={styles.todoList}>
        {
            todoList.map((item)=>{
                return (
                        <li key={item.id} className={styles.todoItem}>
                        <input type="checkbox" id={`todoListitem${item.id}`} className={styles.checkbox} onChange={() => onChecked(item.id)}/>
                        <label htmlFor={`todoListitem${item.id}`} className={styles.label}>{item.text}</label>
                        <button type='button' className={styles.deleteButton} onClick={() => onDelete(item.id)}>🗑️</button>
                    </li>
                )
            })
        }
    </ul>
  )
}
