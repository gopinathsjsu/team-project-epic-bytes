import { Routes } from "./Routes";
import { AppContext, AppContextComponent } from "./store/appContext";

export const App = () => {
  const contextComponent = AppContextComponent();
  return (
    <AppContext.Provider value={contextComponent}>
      <div className="page-container">
        <Routes />
      </div>
    </AppContext.Provider>
  );
};
