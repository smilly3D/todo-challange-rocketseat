import { Header } from "./components/Header"
import {v4 as uuidv4} from "uuid"
import styles from "./App.module.css"

import "./global.css"
import { Taskbar } from "./components/Taskbar"
import { Emptytasks } from "./components/Emptytasks"
import { useState } from "react"
import { Card } from "./components/Card"

interface ITaskProps{
  id: string; 
  content: string; 
  isDone: boolean; 
}

export function App() {
  const [tasks, setTasks] = useState<ITaskProps[]>([])

  function handleAddNewTask(newTaskText: string){

    const newTask = {
      id: uuidv4(),
      content: newTaskText,
      isDone: false
    }

    setTasks([...tasks, newTask])
  }

  function deleteTask(taskToDelete:string){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDelete;
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function taskStatusChange(taskToChangeStatus:string){
    const TaskStatusChange = tasks.map(task =>{
      const isDone = task.id === taskToChangeStatus ? !task.isDone : task.isDone
      return {...task, isDone}    
    })
    setTasks(TaskStatusChange)
  }

  const taskCompleted = tasks.reduce((todasAsTasks, task)=>{
    if (task.isDone){
      todasAsTasks++
    }

    return todasAsTasks
  }, 0)

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Taskbar handleAddNewTask={handleAddNewTask}/>
        <div className={styles.taskBoard}>
          <header className={styles.tasksInfo}>
            <strong  className={styles.createdTasks}>
              Tarefas criadas
                <span>
                  {tasks.length}
                </span>
            </strong>
            <strong className={styles.completedTasks}>
              Concluídas
                <span>
                  {tasks.length === 0 ? 0 : `${taskCompleted} de ${tasks.length}`}
                </span>
            </strong>
          </header>
          {tasks.length === 0 ? 
          (
            <Emptytasks />
          ) : (
            tasks.map(task =>{
              return (
                <Card 
                  key={task.id} 
                  id={task.id} 
                  content={task.content} 
                  isDone={task.isDone} 
                  onDeleteTask={deleteTask} 
                  onCheckTask={taskStatusChange}
                />
              )
            })
         
          )}       
        </div>
      </div>
    </>
  )
}


