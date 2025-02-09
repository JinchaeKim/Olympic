import { createContext } from "react";

const OlympicContext = createContext();

export function OlympicProvider({ children }) {
  return <OlympicContext.Provider>{children}</OlympicContext.Provider>;
}
