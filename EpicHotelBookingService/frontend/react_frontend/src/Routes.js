import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LogInPage } from "./pages/LogInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { UserInfoDashboard } from "./pages/UserInfoDashboard";
import { PrivateRoute } from "./auth/PrivateRoute";
import { EmployeeDashboard } from "./pages/EmployeeDashboard";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <UserInfoDashboard />
        </Route>
        <PrivateRoute path="/admin" exact>
          <EmployeeDashboard />
        </PrivateRoute>
        <Route path="/login">
          <LogInPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
};
