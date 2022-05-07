import { Redirect, Route } from "react-router-dom";
import { AppContext } from "../store/appContext";
import { useContext } from "react";
import { getPayloadFromToken } from "../util/useQueryParams";

export const PrivateRoute = (props) => {
  const { userData, clearLoginUser } = useContext(AppContext);

  let user =
    userData.token !== "" ? getPayloadFromToken(userData.token) : undefined;
  console.log(user);
  if (!user) return <Redirect to="/login" />;

  return <Route {...props} />;
};
