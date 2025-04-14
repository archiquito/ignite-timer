import { CyclesContext } from "../Context";
import { CountdownContainer } from "./styles";
import { useContext, useEffect } from "react";
import { differenceInSeconds } from "date-fns";

export function CountDown() {
  const {
    activeCycle,
    activeCycleData,
    setCycles,
    cycles,
    setAmountSecondsPassed,
    amountSecondsPassed,
    handleInterrupt,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycleData ? activeCycleData.minutes * 60 : 0;
  const currentSeconds = activeCycleData
    ? totalSeconds - amountSecondsPassed
    : 0;
  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutesFormatted = String(minutesAmount).padStart(2, "0");
  const secondsFormatted = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    let interval: number;
    if (activeCycleData) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycleData.startDate
        );
        if (secondsDifference >= totalSeconds) {
          setCycles(
            cycles.map((cycle) => {
              if (cycle.id === activeCycle) {
                return { ...cycle, endDate: new Date() };
              }
              return cycle;
            })
          );
          setAmountSecondsPassed(totalSeconds);
          handleInterrupt();
          return () => clearInterval(interval);
        }
        setAmountSecondsPassed(secondsDifference);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeCycleData, totalSeconds]);

  useEffect(() => {
    if (activeCycleData) {
      document.title = `${minutesFormatted}:${secondsFormatted}`;
    }
  }, [minutesAmount, secondsAmount, activeCycleData]);

  return (
    <CountdownContainer>
      <span>{minutesFormatted[0]}</span>
      <span>{minutesFormatted[1]}</span>
      <span className="separator">:</span>
      <span>{secondsFormatted[0]}</span>
      <span>{secondsFormatted[1]}</span>
    </CountdownContainer>
  );
}
