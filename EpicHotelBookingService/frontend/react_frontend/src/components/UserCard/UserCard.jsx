import React, { Component } from "react";
import "./userCard.css";

// class UserCard extends Component {
//   state = {
//     data: [],
//     per: 9,
//     page: 1,
//     total_pages: null
//   };

const UserCard = ({user}) => {

  // uppercase = word => {
  //   return word.charAt(0).toUpperCase() + word.slice(1);
  // };

  // loadData = () => {
  //   const { per, page, data } = this.state;
  //   const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
  //   fetch(endpoint)
  //     .then(response => response.json())
  //     .then(json => {
  //       this.setState({
  //         data: [...data, ...json.results],
  //         scrolling: false,
  //         total_pages: json.info.results
  //       });
  //     });
  // };

//   loadMore = () => {
//     this.setState(
//       prevState => ({
//         page: prevState.page + 1,
//         scrolling: true
//       }),
//       this.loadData
//     );
//   };

  // componentDidMount() {
  //   this.loadData();
  // }

//   render() {
    return (
      <div className="clearfix">
        <div className="row">
          {/* {this.state.data.map(data => ( */}
            <div className="col-md-4 animated fadeIn" key={user.username}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src="https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png"
                      className="card-img-top"
                      alt="Member picture"
                    />
                  </div>
                  <h5 className="card-title">
                    {user.firstName +
                      " " +
                      user.lastName}
                  </h5>
                  <p className="card-text">
                    {user.rewardPoints +
                      ", " +
                     user.tier}
                    <br />
                    <span className="phone">{user.phone}</span>
                  </p>
                </div>
              </div>
            </div>
        </div>
        <button
          className="btn btn-light btn-block w-50 mx-auto"
        //   onClick={e => {
        //     this.loadMore();
        //   }}
        >
          Load More Users
        </button>
      </div>
    );
  }
// }

export default UserCard;
