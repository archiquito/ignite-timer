import { Play } from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  BtnCountDown,
  TaskInput,
  MinuteInput,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em:</label>
          <TaskInput
            list="tasks"
            type="text"
            id="task"
            name="task"
            required
            placeholder="Dê um nome para o seu projeto"
          />
          <datalist id="tasks">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
          </datalist>
          <label htmlFor="minutes">Durante:</label>
          <MinuteInput
            type="number"
            id="minutes"
            name="minutes"
            required
            min={5}
            max={60}
            step={5}
            placeholder="00"
          />
          <label htmlFor="minutes">minutos</label>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>

          <span className="separator">:</span>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <BtnCountDown type="submit">
          <Play size={24} />
          Começar
        </BtnCountDown>
      </form>
    </HomeContainer>
  );
}
