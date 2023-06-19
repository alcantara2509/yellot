import { useContext, createContext, useState } from "react";

const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const values = [selectedPeriod, setSelectedPeriod];

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export const useMyStore = () => useContext(MyContext);
