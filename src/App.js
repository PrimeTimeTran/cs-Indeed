import React from "react";

// A change on line 3
// this is bitna's comment but its after loi 
// bitna's second comment on master 
import "./App.css";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TeamPage from "./pages/TeamPage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import CompanyPage from "./pages/CompanyPage";
import PortfolioPage from "./pages/PortfolioPage";
import DashboardPage from "./pages/DashboardPage";
import CandidatesPage from "./pages/CandidatesPage";
import NewCandidatePage from "./pages/NewCandidatePage";
import CandidatePage from "./pages/CandidatePage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/company" component={CompanyPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/candidates" exact component={CandidatesPage} />
        <Route path="/newcandidate" exact component={NewCandidatePage} />
        <Route
          exact
          path="/candidates/:id"
          render={props => <CandidatePage {...props} />}
        />
      </Switch>
    </Router>
  );
}
