import Botton from "../Botton";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";
import { TimeToSec } from "../../common/utils/time";

interface Props {
  selected: ITask | undefined
  finishTask: () => void
}

export default function Cronometro({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(selected?.time) {
      setTime(TimeToSec(selected.time))
    }
  },[selected]);

  function regress(cont: number = 0) {
    setTimeout(() => {
      if(cont > 0) {
        setTime(cont -1);
        return regress(cont -1)
      }
      finishTask();
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio time={time} />
      </div>
      <Botton onClick={() => regress(time)} >
        Começar
      </Botton>
    </div>
  )
}