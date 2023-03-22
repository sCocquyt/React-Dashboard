import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoList from './todoLists.jsx'
import HealthForm from './healthForm.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className = 'dashboard'>
      <div className = 'main-container'>
        <div className = 'title-container'>
            Sasha's Dashboard
        </div>
        <div className = "todo-container">
          <div className = "todo-hw-list">
            <div className = "titles">
              Homework Todo List
            </div>
            <TodoList/>
          </div>
          <div className = "todo-life-list">
            <div className = "titles">
              Life Todo List
            </div>
            <TodoList/>
          </div>
        </div>
        <div className = "health-container">
          <div className = "health-form-container">
            <div className = "titles">
              Daily Heath Form
            </div>
            <div className = "survey-container">
              <HealthForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
)
