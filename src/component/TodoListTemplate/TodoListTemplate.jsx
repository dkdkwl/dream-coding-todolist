import React, { useState } from 'react'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoList from '../TodoList/TodoList'
import TodoInput from '../TodoInput/TodoInput'
import styles from './TodoListTemplate.module.css'

export default function TodoListTemplate() {
  const [todoList,setTodoList] = useState([
    {id:1, text:'강의보기', checked:false},
    {id:2, text:'알고리즘 문제풀기', checked:true},
    {id:3, text:'운동하기', checked:false},
  ])
  return (
    <div className={styles.container}>
      <div className={styles.TodoListTemplate}>
      <TodoHeader></TodoHeader>
      {
       todoList.map(item => (
        <TodoList key={`todoList.${item.id}`} text={item.text} checked={item.checked}></TodoList>
       ))
      }
      <TodoInput></TodoInput>
      </div>
    </div>
  )
}
