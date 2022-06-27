import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from "react";
import { CheckedIcon } from "../assets/Checkbutton";

import styles from "./Card.module.css"

interface ITaskProps {
  id: string;
  content: string;
  isDone: boolean;
  onDeleteTask: (task:string) => void;
  onCheckTask: (task:string) => void;
}

export function Card({id, content, isDone, onDeleteTask, onCheckTask}:ITaskProps){
  const [isTest, setIsTest] = useState(false)

  function handleDeleteTask(){
    onDeleteTask(id)
  }

  function handleCheckTask() {
    onCheckTask(id)
  }

  return(
    <div className={styles.card}>
      {isDone ? (

        <button onClick={handleCheckTask} className={styles.checkDone} title='Check Task'>
          <CheckedIcon />
        </button>
      ):(
        <button onClick={handleCheckTask} className={styles.check} title='Check Task'>
          <Circle size={24} weight="duotone"/>
        </button>
      )}

      <p className={isDone ? styles.cardParagraphDone : styles.cardParagraph}>
        {content}
      </p>

      <button className={styles.delete} onClick={handleDeleteTask} title='Deletar Task'>
              <Trash size={14} weight="bold"/>
      </button>
    </div>
  )  
}