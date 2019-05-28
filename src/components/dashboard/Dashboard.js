import React, { Component } from "react";
import Notification from "./Notifications";

import ProjectList from "../projects/ProjectList";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard container">
        <div className="col sm m6">
          <ProjectList />
        </div>
        <div className="col sm m5 offset-m1">
          <Notification />
        </div>
      </div>
    );
  }
}

export default Dashboard;
