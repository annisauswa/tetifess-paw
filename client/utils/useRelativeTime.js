import { useState, useEffect } from 'react';

const SECONDS = 1;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;
const DAYS = 24 * HOURS;
const WEEKS = 7 * DAYS;
const MONTHS = 30 * DAYS;

export default function useRelativeTime(timestamp) {
  const [relativeTime, setRelativeTime] = useState('');

  useEffect(() => {
    const date = new Date(timestamp);
    const now = new Date();
    const secondsPast = (now.getTime() - date.getTime()) / 1000;

    if (secondsPast < MINUTES) {
      setRelativeTime(`${Math.floor(secondsPast)} s`);
    } else if (secondsPast < HOURS) {
      setRelativeTime(`${Math.floor(secondsPast / MINUTES)} m`);
    } else if (secondsPast <= DAYS) {
      setRelativeTime(`${Math.floor(secondsPast / HOURS)} h`);
    } else if (secondsPast > DAYS) {
      const day = Math.floor(secondsPast / DAYS);
      if (day <= 7) {
        setRelativeTime(`${day} d`);
      } else if (day <= 30) {
        setRelativeTime(`${Math.floor(day / 7)} w`);
      } else {
        setRelativeTime(`${Math.floor(day / 30)} m`);
      }
    }
  }, [timestamp]);

  return relativeTime;
}