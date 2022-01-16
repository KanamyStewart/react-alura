import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Form from '../components/Form';
import List from '../components/List';
import { ITask } from '../types/task';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelect: ITask) {
    setSelected(taskSelect);
    setTasks(tasksOld => tasksOld.map(task => ({
      ...task,
      selected: task.id === taskSelect.id ? true : false
    })));
  }

  function finishTask() {
    if(selected) {
      setSelected(undefined);
      setTasks(tasksOld => tasksOld.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List
        task={tasks} 
        selectTask={selectTask}
      />
      <Cronometro 
        selected={selected} 
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
