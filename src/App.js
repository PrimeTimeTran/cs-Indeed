import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar.js";

import CompanyPage from "./pages/CompanyPage";
import TeamPage from "./pages/TeamPage";
import CandidatesPage from "./pages/CandidatesPage";
import DashboardPage from "./pages/DashboardPage.js";
import NewCandidatePage from "./pages/NewCandidatePage";
import EditCandidatePage from "./pages/EditCandidatePage.js";
import PortfolioPage from "./pages/PortfolioPage.js";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={CompanyPage} />
      <Route path="/company" component={CompanyPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/candidates/" exact component={CandidatesPage} />
      <Route path="/candidates/new" component={NewCandidatePage} />
      <Route
        path="/candidates/:id/edit"
        render={props => <EditCandidatePage {...props} />}
      />
    </Router>
  );
}
