import { PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"
import styles from "./Taskbar.module.css"
import {v4 as uuidv4} from "uuid"


interface TaskProps {

  handleAddNewTask: (task:string) => void
}


export function Taskbar({handleAddNewTask}:TaskProps){

  const [newTaskText, setNewTaskText] = useState("")
  
  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()

    handleAddNewTask(newTaskText)

    setNewTaskText("")
  }
  
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');

     setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }


  return(
    <form onSubmit={handleCreateNewTask} className={styles.taskBar}>
      <input 
        placeholder="Adicione uma nova tarefa" 
        value={newTaskText}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button type='submit'>Criar
      <PlusCircle size={16} weight="bold"/>
      </button>
    </form>
  )
}