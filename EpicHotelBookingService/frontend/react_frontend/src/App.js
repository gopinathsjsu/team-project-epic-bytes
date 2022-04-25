import { dividerClasses } from "@mui/material";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { Routes } from "./Routes";
import { AppContext, AppContextComponent } from "./store/appContext";

export const App = () => {
  const contextComponent = AppContextComponent();
  return (
    // <div>

    //    <Navbar />
    //    <Hero />
    // </div>
    <AppContext.Provider value={contextComponent}>
      <Routes />
    </AppContext.Provider>
  );
};
