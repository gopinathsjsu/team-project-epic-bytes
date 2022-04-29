import { Redirect, Route } from "react-router-dom";
import { AppContext } from "../store/appContext";
import { useContext } from "react";
import { getPayloadFromToken } from "../util/useQueryParams";

export const PrivateRoute = (props) => {
  const { userdata, clearLoginUser } = useContext(AppContext);

  let user =
    userdata.token !== "" ? getPayloadFromToken(userdata.token) : undefined;
  console.log(user);
  if (!user) return <Redirect to="/login" />;

  return <Route {...props} />;
};
