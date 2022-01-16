export function TimeToSec(time: string) {
  const [hours = '0', minutes = '0', secunds = '0'] = time.split(":")

  const hoursToSec = Number(hours) * 3600;
  const minutesToSec = Number(minutes) * 60;
  return hoursToSec + minutesToSec + Number(secunds);
}