import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";

import CompanyPage from "./pages/CompanyPage";
import CandidatesPage from "./pages/CandidatesPage";
import NewCandidatePage from "./pages/NewCandidatePage";
import EditCandidatePage from "./pages/EditCandidatePage.js";
import DashboardPage from "./pages/DashboardPage.js";
import Navbar from "./components/Navbar.js";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={CompanyPage} />
        <Route path="/company" component={CompanyPage} />
        <Route path="/candidates/" exact component={CandidatesPage} />
        <Route path="/candidates/new" component={NewCandidatePage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route
          path="/candidates/:id/edit"
          render={props => <EditCandidatePage {...props} />}
        />
      </Router>
    </div>
  );
}
