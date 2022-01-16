import React from "react";
import { ITask } from "../../types/task";
import Botton from "../Botton";
import style from './Form.module.scss';
import {v4 as uuidv4} from 'uuid';

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
  state = {
    task: "",
    time: "00:00"
  }

  adicionarTask(evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault();
    this.props.setTasks(tasksOld =>
      [
        ...tasksOld,
        {
          ...this.state,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ]
    );
    this.setState({
      task: "",
      time: "00:00"
    })
  }

  render() {
      return(
        <form className={style.novaTarefa} onSubmit={this.adicionarTask.bind(this)}>
          <div className={style.inputContainer}>
            <label htmlFor="task">
              Adicione um novo Estudo.!
            </label>
            <input 
              type="text"
              name="task"
              id="task"
              value={this.state.task}
              onChange={evento => this.setState({ ...this.state, task: evento.target.value})}
              placeholder="O que você quer estudar"
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="time">
              Tempo
            </label>
            <input 
              type="time"
              step="1"
              name="time"
              value={this.state.time}
              onChange={evento => this.setState({ ...this.state, time: evento.target.value })}
              id="time"
              min="00:00:00"
              max="01:30:00"
              required
            />
          </div>
            <Botton type="submit"> 
              Adicionar
            </Botton>
        </form>
      )
  }
}

export default Form;