import React from 'react'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoList from '../TodoList/TodoList'
import TodoInput from '../TodoInput/TodoInput'
import styles from './TodoListTemplate.module.css'

console.log(TodoHeader)


export default function TodoListTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.TodoListTemplate}>
      <TodoHeader></TodoHeader>
      <TodoList></TodoList>
      <TodoInput></TodoInput>
      </div>
    </div>
  )
}
