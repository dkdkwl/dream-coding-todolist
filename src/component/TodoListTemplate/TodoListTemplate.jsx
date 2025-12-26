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
  return (
    <div className={styles.container}>
      <div className={styles.TodoListTemplate}>
      <TodoHeader></TodoHeader>
        <TodoList todoList={todoList} onChecked={checkboxChange}></TodoList>
      <TodoInput></TodoInput>
      </div>
    </div>
  )
}
