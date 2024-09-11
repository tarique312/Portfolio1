import { createContext, useState } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [tab, setTab] = useState("Home");

  return (
    <PortfolioContext.Provider value={{ tab, setTab }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
