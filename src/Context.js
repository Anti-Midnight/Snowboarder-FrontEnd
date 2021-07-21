/* eslint-disable react/prop-types */
import React, { Component } from "react";

export const MyContext = React.createContext();
export class MyProvider extends Component {
  state = {
    userProfile: {
      name: "Guest"
    },
    loggedIn: false,
    jwt: ""
  };

  updateUserStatus = async () => {
    await this.setState({
      jwt: localStorage.getItem("token")
    });
    if (this.state.jwt) {
      let status = 0;

      console.log("Found JWT");
      console.log(this.state.jwt);

      fetch(process.env.REACT_APP_REST_API_LOCATION + "/users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.state.jwt
        }
      })
        .then(res => {
          status = res.status;
          return res.json();
        })
        .then(async data => {
          if (status === 200) {
            await this.setState({
              userProfile: data,
              loggedIn: true
            });
            console.log("Below user profile has been updated to context:");
            console.log(data);
          } else {
            localStorage.removeItem("jwt");
            console.log("JWT invalid. JWT removed");
            await this.setState({
              userProfile: {}
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      console.log("JWT not found");
      this.setState({
        userProfile: {
          name: "Guest"
        },
        loggedIn: false
      });
    }
  };



  componentDidMount() {
    this.updateUserStatus();
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          updateUserStatus: this.updateUserStatus,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
