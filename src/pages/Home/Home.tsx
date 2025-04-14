import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Play, Stop } from "phosphor-react";
import { HomeContainer, BtnCountDown, BtnStopCountDown } from "./styles";
import { FormInputs } from "./FormInputs/FormInputs";
import { CountDown } from "./CountDown/CountDown";
import { CyclesContext } from "./Context";

const formValidationSchema = z.object({
  task: z.string().min(3, "Informe o nome da tarefa"),
  minutes: z
    .number()
    .min(5, "O tempo mínimo é de 5 minutos")
    .max(60, "O tempo máximo é de 60 minutos"),
});

export type formValidationSchemaData = z.infer<typeof formValidationSchema>;

export interface CyclesProps {
  id: string;
  task: string;
  minutes: number;
  startDate: Date;
  endDate?: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<CyclesProps[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const newCycleForm = useForm<formValidationSchemaData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      task: "",
      minutes: 0,
    },
  });

  const { handleSubmit, reset } = newCycleForm;

  const onSubmit: SubmitHandler<formValidationSchemaData> = (data) => {
    const newCycle: CyclesProps = {
      id: String(new Date().getTime()),
      task: data.task,
      minutes: data.minutes,
      startDate: new Date(),
    };
    setCycles((cycles) => [...cycles, newCycle]);
    setActiveCycleId(newCycle.id);
    setAmountSecondsPassed(0);

    reset();
  };

  const activeCycleData = cycles.find((cycle) => cycle.id === activeCycleId);

  const handleInterrupt = () => {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, endDate: new Date() };
        }
        return cycle;
      })
    );
    setActiveCycleId(null);
  };

  return (
    <CyclesContext.Provider
      value={{
        activeCycleId,
        setActiveCycleId,
        activeCycleData,
        cycles,
        setCycles,
        amountSecondsPassed,
        setAmountSecondsPassed,
        handleInterrupt
      }}
    >
      <HomeContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...newCycleForm}>
            <FormInputs />
          </FormProvider>
          <CountDown />
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
    </CyclesContext.Provider>
  );
}
