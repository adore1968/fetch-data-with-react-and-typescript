import { createContext, useContext } from "react";
import { AppContextType } from "../ts/interfaces";

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error(
      "useAppContext has to be used within <AppContext.Provider>"
    );
  }
  return appContext;
};
