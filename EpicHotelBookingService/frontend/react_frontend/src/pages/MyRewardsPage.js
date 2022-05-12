import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { SecureAPIInstance } from "../api/axiosInstance";
// import UserProfileView from "../components/UserCard/UserProfileView";
import Footer from "../components/Footer/Footer";

export const MyRewardsPage = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    SecureAPIInstance.get("/users")
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar history={history} />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
          <h2 className="pageHeading">My Account</h2>
          <div className="siDesc">
          </div>
          <h1 className="siTitle">Username: {user.username}</h1>
          <h1 className="siTitle">Firstname: {user.firstName}</h1>
          <h1 className="siTitle">Lastname: {user.lastName}</h1>
          <h1 className="siTitle">Phone: {user.phone}</h1>
          <h1 className="siTitle">Email: {user.email}</h1>
          <h1 className="siTitle">RewardPoints: {user.rewardPoints}</h1>
          <h1 className="siTitle">Tier: {user.tier}</h1>
          </div>
        </div>
      </div>
    </>
  );
};