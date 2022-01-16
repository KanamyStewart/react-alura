import style from './Relogio.module.scss';

interface Props {
  time: number | undefined
}

export default function Relogio({ time = 0  }: Props) {
  const minutes = Math.floor(time / 60);
  const secunds = time % 60;
  const [minuteDez, minuteUnid] = String(minutes).padStart(2, '0');
  const [secundDez, secundUnid] = String(secunds).padStart(2, '0');
  return (
    <>
      <span className={style.relogioNumero}>{minuteDez}</span>
      <span className={style.relogioNumero}>{minuteUnid}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secundDez}</span>
      <span className={style.relogioNumero}>{secundUnid}</span>
    </>
  )
}