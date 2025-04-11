import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/globals";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Button label="Clique aqui" size="large" disabled={true} />
        <Button label="Clique aqui" color="danger" />
        <Button label="Clique aqui" color="info" />
      </ThemeProvider>
    </>
  );
}
