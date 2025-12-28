import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoListTemplate from './component/TodoListTemplate/TodoListTemplate'
import { DarkModeTestProvider } from './context/DarkModeTestContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeTestProvider>
      <TodoListTemplate />
    </DarkModeTestProvider>
  </StrictMode>,
)
