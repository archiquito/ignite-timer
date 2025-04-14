import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../Context";
import { FormContainer, TaskInput, MinuteInput } from "./styles";
import { useContext } from "react";

export function FormInputs () {
    const { activeCycleData } = useContext(CyclesContext);
    const { register } = useFormContext()
    return (
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
    )
}