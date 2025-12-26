import React from 'react'
import styles from './TodoList.module.css'

export default function TodoList({todoList, onChecked, onDelete, onComplete, filterText}) {
  return (
    <ul className={styles.todoList}>
        {
            todoList.length === 0 ? <p className={styles.emptyMessage}>{filterText} 일이 없습니다</p> : 
                todoList.map((item)=>{
                    return (
                        <li key={item.id} className={styles.todoItem}>
                            <input type="checkbox" id={`todoListitem${item.id}`} className={styles.checkbox} checked={item.isChecked} onChange={() => onChecked(item.id)}/>
                            <p onClick={() => onComplete(item.id)} className={`${styles.label} ${item.isComplete ? styles.complete : ''}`}>{item.text}</p>
                            <button type='button' className={styles.deleteButton} onClick={() => onDelete(item.id)}>🗑️</button>
                        </li>
                    )
                })
            
        }
    </ul>
  )
}