import React, { useState } from 'react'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoList from '../TodoList/TodoList'
import TodoInput from '../TodoInput/TodoInput'
import styles from './TodoListTemplate.module.css'

export default function TodoListTemplate() {
  const [todoList,setTodoList] = useState([]);
  const checkboxChange = (id)=>{
    setTodoList(
      todoList.map((todo)=>{
        if(todo.id === id){
          return {...todo, isChecked: !todo.isChecked}
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
        isChecked:false,
        isComplete:false
      }
    ]);
    console.log(todoList);
  }
  const todoListDelete = (id)=>{
    setTodoList(
      todoList.filter((prev) => prev.id !== id)
    )
  }
  const todoListComplete = (id)=>{
    console.log(id);
    setTodoList(
      todoList.map((todo)=>{
        if(todo.id === id){
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    )
  }
  return (
    <div className={styles.container}>
      <div className={styles.TodoListTemplate}>
      <TodoHeader></TodoHeader>
        <TodoList todoList={todoList} onChecked={checkboxChange} onDelete={todoListDelete} onComplete={todoListComplete}></TodoList>
      <TodoInput todoListAdd={todoListAdd}></TodoInput>
      </div>
    </div>
  )
}
