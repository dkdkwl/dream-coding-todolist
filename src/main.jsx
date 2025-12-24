import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoListTemplate from './TodoListTemplate'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoListTemplate />
  </StrictMode>,
)
