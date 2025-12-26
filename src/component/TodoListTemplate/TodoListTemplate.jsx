import React, { useState } from 'react'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoList from '../TodoList/TodoList'
import TodoInput from '../TodoInput/TodoInput'
import styles from './TodoListTemplate.module.css'

export default function TodoListTemplate() {
  const [todoList,setTodoList] = useState([]);
  const [filterState, setFilterState] = useState('all');
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
  }
  const todoListDelete = (id)=>{
    setTodoList(
      todoList.filter((prev) => prev.id !== id)
    )
  }
  const todoListComplete = (id)=>{
    setTodoList(
      todoList.map((todo)=>{
        if(todo.id === id){
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    )
  }
  const todoListFilter = (filterType) => {
    setFilterState(filterType);  // 필터 상태만 변경!
  }

  // 렌더링할 때 필터링된 목록 생성
  const filteredTodos = todoList.filter((todo) => {
    if(filterState === 'all') return true;
    if(filterState === 'active') return !todo.isComplete;
    if(filterState === 'complete') return todo.isChecked;
    return true;
  });

  return (
    <div className={styles.container}>
      <div className={styles.TodoListTemplate}>
      <TodoHeader onFilter={todoListFilter}></TodoHeader>
        <TodoList todoList={filteredTodos} onChecked={checkboxChange} onDelete={todoListDelete} onComplete={todoListComplete}></TodoList>
      <TodoInput todoListAdd={todoListAdd}></TodoInput>
      </div>
    </div>
  )
}
