import React,{useState} from 'react'
import styles from './TodoInput.module.css'

export default function TodoInput({ todoListAdd }) {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue !== ''){
      todoListAdd(inputValue)
      setInputValue('')                       // 입력 초기화
    }else{
      alert('할일을 입력해주세요!');
      return false
    }
  }
  return (
    <div >
      <form action="" className={styles.todoInput} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Add Todo" 
          className={styles.input}
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
        />
        <button type="submit" className={styles.addButton}>Add</button>
      </form>
    </div>
  )
}