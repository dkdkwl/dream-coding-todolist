import React, { useState } from 'react'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoList from '../TodoList/TodoList'
import TodoInput from '../TodoInput/TodoInput'
import styles from './TodoListTemplate.module.css'

export default function TodoListTemplate() {
  const [todoList,setTodoList] = useState([])
  const checkboxChange = (id)=>{
    setTodoList(
      todoList.map((todo)=>{
        if(todo.id === id){
          return {...todo, checked: !todo.checked}
        }
        return todo;
      })
    )
  }
  const todoListAdd = (text)=>{
    setTodoList([
      ...todoList,{
        id: todoList.length + 1,
        text,
        checked:false
      }
    ])
  }
  return (
    <div className={styles.container}>
      <div className={styles.TodoListTemplate}>
      <TodoHeader></TodoHeader>
        <TodoList todoList={todoList} onChecked={checkboxChange}></TodoList>
      <TodoInput todoListAdd={todoListAdd}></TodoInput>
      </div>
    </div>
  )
}
