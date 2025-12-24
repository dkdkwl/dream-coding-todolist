import React from 'react'
import styles from './TodoList.module.css'

export default function TodoList() {
  return (
    <ul className={styles.todoList}>
      <li className={styles.todoItem}>
        <input type="checkbox" id="todoListitem1" className={styles.checkbox} />
        <label htmlFor="todoListitem1" className={styles.label}>강의 보기</label>
        <button type='button' className={styles.deleteButton}>🗑️</button>
      </li>
      <li className={styles.todoItem}>
        <input type="checkbox" id="todoListitem2" className={styles.checkbox} />
        <label htmlFor="todoListitem2" className={styles.label}>카페가기</label>
        <button type='button' className={styles.deleteButton}>🗑️</button>
      </li>
      <li className={styles.todoItem}>
        <input type="checkbox" id="todoListitem3" className={styles.checkbox} />
        <label htmlFor="todoListitem3" className={styles.label}>청소하기</label>
        <button type='button' className={styles.deleteButton}>🗑️</button>
      </li>
    </ul>
  )
}
