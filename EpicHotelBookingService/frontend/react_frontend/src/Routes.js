import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LogInPage } from "./pages/LogInPage";
import { SignUpPageV2 } from "./pages/SignUpPageV2";
import { UserInfoDashboard } from "./pages/UserInfoDashboard";
import { RewardsPage } from "./pages/RewardsPage";
import { PrivateRoute } from "./auth/PrivateRoute";
import { AdminRoute } from "./auth/AdminRoute";
import { EmployeeDashboard } from "./pages/EmployeeDashboard";
import List from "./components/list/List";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <UserInfoDashboard />
        </Route>
        <AdminRoute path="/admin" exact>
          <EmployeeDashboard />
        </AdminRoute>
        <Route path="/login">
          <LogInPage />
        </Route>
        <PrivateRoute path="/rewards">
          <RewardsPage />
        </PrivateRoute>
        <Route path="/signup">
          <SignUpPageV2 />
        </Route>
        <Route path="/hotels">
           <List />
        </Route>
      </Switch>
    </Router>
  );
};
