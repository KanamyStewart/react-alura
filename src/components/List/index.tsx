import { ITask } from "../../types/task";
import Item from "./item";
import style from './Item.module.scss';

interface Props {
  task: ITask[],
  selectTask: (taskSelect: ITask) => void
}

function List({ task, selectTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {task.map((item) => (
        <Item
          selectTask={selectTask}
          key={item.id}
          {...item}
        />
        ))}
      </ul>
    </aside>
  )
}

export default List;