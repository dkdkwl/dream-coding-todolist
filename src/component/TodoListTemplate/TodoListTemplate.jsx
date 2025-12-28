import React, { useState,useReducer } from 'react'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoList from '../TodoList/TodoList'
import TodoInput from '../TodoInput/TodoInput'
import styles from './TodoListTemplate.module.css'
import tasksReducer, { initialTasks } from '../../reducers/Reducer';

const FILTER_TEXT = {
  all: '전체',
  active: '활성화',
  complete: '완료'
};

export default function TodoListTemplate() {
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  
  const [filterState, setFilterState] = useState('all');
  function todoListAdd(text) {
    dispatch({
      type: 'added',
      text: text,
    });
  }
  function todoListDelete(id){
    dispatch({
      type: 'deleted',
      id: id
    });
  }
  function todoListActive(id){
    dispatch({
      type: 'active',
      id: id
    });
  }
  function todoListComplete(id){
    dispatch({
      type: 'changed',
      id: id
    });
  }
  const todoListFilter = (filterType) => {
    setFilterState(filterType);  // 필터 상태만 변경!
  }

  // 렌더링할 때 필터링된 목록 생성
  const filteredTodos = tasks.filter((todo) => {
    if(filterState === 'all') return true;
    if(filterState === 'active') return !todo.isChecked; // 체크 안 된 것들 (진행 중)
    if(filterState === 'complete') return todo.isChecked; // 체크 된 것들 (완료)
    return true;
  });

  return (
    <div className={styles.container}>
      <div className={styles.TodoListTemplate}>
      <TodoHeader onFilter={todoListFilter} filterState={filterState}></TodoHeader>
        <TodoList todoList={filteredTodos} onChecked={todoListComplete} onDelete={todoListDelete} onActive={todoListActive} filterText={FILTER_TEXT[filterState]}></TodoList>
      <TodoInput todoListAdd={todoListAdd}></TodoInput>
      </div>
    </div>
  )
}
