import React, { Component } from "react";

import EditCandidatePage from "./EditCandidatePage";

export default class NewCandidatePage extends Component {
  render() {
    return (
      <div>
        <h1>New Candidate</h1>
        <EditCandidatePage />
      </div>
    );
  }
}
