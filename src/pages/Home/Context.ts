import { createContext } from "react";
import { CyclesProps } from "./Home";

interface CyclesContextProps {
    activeCycleId: string | null;
    setActiveCycleId: React.Dispatch<React.SetStateAction<string | null>>;
    activeCycleData: CyclesProps | undefined;
    cycles: CyclesProps[];
    setCycles: React.Dispatch<React.SetStateAction<CyclesProps[]>>;
    amountSecondsPassed: number;
    setAmountSecondsPassed: React.Dispatch<React.SetStateAction<number>>;
    handleInterrupt: () => void;
}

export const CyclesContext = createContext({} as CyclesContextProps);