import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Play, Stop } from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  BtnCountDown,
  BtnStopCountDown,
  TaskInput,
  MinuteInput,
} from "./styles";
import { differenceInSeconds } from "date-fns";

const formValidationSchema = z.object({
  task: z.string().min(3, "Informe o nome da tarefa"),
  minutes: z
    .number()
    .min(5, "O tempo mínimo é de 5 minutos")
    .max(60, "O tempo máximo é de 60 minutos"),
});

type formValidationSchemaData = z.infer<typeof formValidationSchema>;

interface CyclesProps {
  id: string;
  task: string;
  minutes: number;
  startDate: Date;
  endDate?: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<CyclesProps[]>([]);
  const [activeCycle, setActiveCycle] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const { register, handleSubmit, reset } = useForm<formValidationSchemaData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      task: "",
      minutes: 0,
    },
  });

  const onSubmit: SubmitHandler<formValidationSchemaData> = (data) => {
    console.log(data);
    const newCycle: CyclesProps = {
      id: String(new Date().getTime()),
      task: data.task,
      minutes: data.minutes,
      startDate: new Date(),
    };
    setCycles((cycles) => [...cycles, newCycle]);
    setActiveCycle(newCycle.id);
    setAmountSecondsPassed(0);

    reset();
  };

  const activeCycleData = cycles.find((cycle) => cycle.id === activeCycle);
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
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycleData.startDate)
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeCycleData]);

  useEffect(() => {
    if (activeCycleData) {
      document.title = `${minutesFormatted}:${secondsFormatted}`;
    }
  }, [minutesAmount, secondsAmount, activeCycleData]);

  const handleInterrupt = () => {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activeCycle) {
          return { ...cycle, endDate: new Date() };
        }
        return cycle;
      })
    );
    setActiveCycle(null);
  };

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em:</label>
          <TaskInput
            list="tasks"
            id="task"
            required
            placeholder="Dê um nome para o seu projeto"
            disabled={!!activeCycleData}
            {...register("task", {
              required: true,
            })}
          />

          <datalist id="tasks">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
          </datalist>
          <label htmlFor="minutes">Durante:</label>
          <MinuteInput
            type="number"
            id="minutes"
            placeholder="00"
            min={5}
            max={60}
            step={5}
            disabled={!!activeCycleData}
            {...register("minutes", {
              required: true,
              valueAsNumber: true,
            })}
          />
          <label htmlFor="minutes">minutos</label>
        </FormContainer>
        <CountdownContainer>
          <span>{minutesFormatted[0]}</span>
          <span>{minutesFormatted[1]}</span>

          <span className="separator">:</span>
          <span>{secondsFormatted[0]}</span>
          <span>{secondsFormatted[1]}</span>
        </CountdownContainer>
        {activeCycleData ? (
          <BtnStopCountDown type="button" onClick={handleInterrupt}>
            <Stop size={24} />
            Interromper
          </BtnStopCountDown>
        ) : (
          <BtnCountDown type="submit">
            <Play size={24} />
            Começar
          </BtnCountDown>
        )}
      </form>
    </HomeContainer>
  );
}
