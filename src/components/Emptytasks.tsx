
import clipboard from "../assets/clipboard.svg"
import styles from './Emptytasks.module.css'

export function Emptytasks(){
  return(
    <div className={styles.emptyTask}>
      <img src={clipboard}/>
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}