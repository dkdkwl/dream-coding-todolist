import React, { useState } from 'react'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoList from '../TodoList/TodoList'
import TodoInput from '../TodoInput/TodoInput'
import styles from './TodoListTemplate.module.css'

export default function TodoListTemplate() {
  const [todosList, setTodosList] = useState([
    {id:1, text:'강의 보기', checked:false},
    {id:2, text:'카페가기', checked:true},
    {id:3, text:'청소하기', checked:false},
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.TodoListTemplate}>
      <TodoHeader></TodoHeader>
      {
        todosList.map(element => {
          return (
            <TodoList key={element.id} id={element.id} text={element.text} checked={element.checked}></TodoList>
          )
        })
      }
      
      <TodoInput></TodoInput>
      </div>
    </div>
  )
}
