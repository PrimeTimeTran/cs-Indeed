import React, { Component } from "react";
import { Helmet } from "react-helmet";

import CandidateForm from "../components/CandidateForm";

export default class NewCandidatePage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>New Candidate</title>
        </Helmet>
        <h1>New Candidate</h1>
        <CandidateForm />
      </div>
    );
  }
}
