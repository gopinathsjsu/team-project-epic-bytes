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
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                {/* <UserCard user = {user} /> */}
                {/* <UserProfileView /> */}
                <div><pre>{JSON.stringify(user, null, 2) }</pre></div>
                <Footer />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};