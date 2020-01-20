/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

import "../css/sb-admin.css";

import { placeCopyright } from "../utils";

export default function DashboardPage() {
  const currentUser = useSelector(state => state.email);
  const dispatch = useDispatch();
  let history = useHistory();

  const signOut = () => {
    dispatch({ type: "SIGN_OUT" });
    history.push("/");
  };

  return (
    <main role="main">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <nav className="navbar navbar-expand navbar-dark bg-dark static-top fixed-top">
        <Link to="/" className="nav-link">
          Indeed
        </Link>
        <button
          className="btn btn-link btn-sm text-white order-1 order-sm-0"
          id="sidebarToggle"
          href="#"
        >
          <i className="fas fa-bars"></i>
        </button>

        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0 search-input">
          <div className="input-group">
            <input
              type="text"
              aria-label="Search"
              className="form-control"
              placeholder={currentUser}
              aria-describedby="basic-addon2"
            />
            >
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </form>
        <button onClick={signOut}>Sign Out</button>
        <ul className="navbar-nav ml-auto ml-md-0">
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              href="#"
              role="button"
              id="alertsDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              className="nav-link dropdown-toggle"
            >
              <i className="fas fa-bell fa-fw"></i>
              <span className="badge badge-danger">9+</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="alertsDropdown"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-envelope fa-fw"></i>
              <span className="badge badge-danger">7</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="messagesDropdown"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-user-circle fa-fw"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="#">
                Settings
              </a>
              <a className="dropdown-item" href="#">
                Activity Log
              </a>
              <div className="dropdown-divider"></div>
              <a
                href="#"
                className="dropdown-item"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>

      <div id="wrapper">
        <ul className="sidebar navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="pagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-fw fa-folder"></i> <span>Pages</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
              <h6 className="dropdown-header">Login Screens:</h6>
              <a className="dropdown-item" href="login.html">
                Login
              </a>
              <a className="dropdown-item" href="register.html">
                Register
              </a>
              <a className="dropdown-item" href="forgot-password.html">
                Forgot Password
              </a>
              <div className="dropdown-divider"></div>
              <h6 className="dropdown-header">Other Pages:</h6>
              <a className="dropdown-item" href="404.html">
                404 Page
              </a>
              <a className="dropdown-item" href="blank.html">
                Blank Page
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="charts.html">
              <i className="fas fa-fw fa-chart-area"></i> <span>Charts</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="tables.html">
              <i className="fas fa-fw fa-table"></i> <span>Tables</span>
            </a>
          </li>
        </ul>

        <div id="content-wrapper" style={{ paddingTop: "5vh" }}>
          <div className="container-fluid">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Overview</li>
            </ol>

            <div className="row">
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fas fa-fw fa-comments"></i>
                    </div>
                    <div className="mr-5">26 New Messages!</div>
                  </div>
                  <a
                    className="card-footer text-white clearfix small z-1"
                    href="#"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-warning o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fas fa-fw fa-list"></i>
                    </div>
                    <div className="mr-5">11 New Tasks!</div>
                  </div>
                  <a
                    className="card-footer text-white clearfix small z-1"
                    href="#"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fas fa-fw fa-shopping-cart"></i>
                    </div>
                    <div className="mr-5">123 New Orders!</div>
                  </div>
                  <a
                    className="card-footer text-white clearfix small z-1"
                    href="#"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fas fa-fw fa-life-ring"></i>
                    </div>
                    <div className="mr-5">13 New Tickets!</div>
                  </div>
                  <a
                    className="card-footer text-white clearfix small z-1"
                    href="#"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-header">
                <i className="fas fa-chart-area"></i> Area Chart Example
              </div>
              <div className="card-body">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className=""></div>
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className=""></div>
                  </div>
                </div>
                <canvas
                  id="myAreaChart"
                  width="1096"
                  height="328"
                  className="chartjs-render-monitor"
                  style={{
                    width: 548,
                    height: 164,
                    display: "block"
                  }}
                />
              </div>
              <div className="card-footer small text-muted">
                Updated yesterday at 11:59 PM
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-header">
                <i className="fas fa-table"></i> Data Table Example
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <div
                    id="dataTable_wrapper"
                    className="dataTables_wrapper dt-bootstrap4"
                  >
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div
                          className="dataTables_length"
                          id="dataTable_length"
                        >
                          <label>
                            Show{" "}
                            <select
                              name="dataTable_length"
                              aria-controls="dataTable"
                              className="custom-select custom-select-sm form-control form-control-sm"
                            >
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>{" "}
                            entries
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div
                          id="dataTable_filter"
                          className="dataTables_filter"
                        >
                          <label>
                            Search:
                            <input
                              type="search"
                              className="form-control form-control-sm"
                              placeholder=""
                              aria-controls="dataTable"
                            />{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <table
                          className="table table-bordered dataTable"
                          id="dataTable"
                          width="100%"
                          cellSpacing="0"
                          role="grid"
                          aria-describedby="dataTable_info"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr role="row">
                              <th
                                className="sorting_asc"
                                tabIndex="0"
                                aria-controls="dataTable"
                                rowSpan="1"
                                colSpan="1"
                                aria-sort="ascending"
                                aria-label="Name: activate to sort column descending"
                                style={{ width: 59 }}
                              >
                                Name
                              </th>
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="dataTable"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"
                                style={{ width: 65 }}
                              >
                                Position
                              </th>
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="dataTable"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: 53 }}
                              >
                                Office
                              </th>
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="dataTable"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Age: activate to sort column ascending"
                                style={{ width: 31 }}
                              >
                                Age
                              </th>
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="dataTable"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Start date: activate to sort column ascending"
                                style={{ width: 65 }}
                              >
                                Start date
                              </th>
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="dataTable"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Salary: activate to sort column ascending"
                                style={{ width: 65 }}
                              >
                                Salary
                              </th>
                            </tr>
                          </thead>
                          <tfoot>
                            <tr>
                              <th rowSpan="1" colSpan="1">
                                Name
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Position
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Office
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Age
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Start date
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Salary
                              </th>
                            </tr>
                          </tfoot>
                          <tbody>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Airi Satou</td>
                              <td>Accountant</td>
                              <td>Tokyo</td>
                              <td>33</td>
                              <td>2008/11/28</td>
                              <td>$162,700</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Angelica Ramos</td>
                              <td>Chief Executive Officer (CEO)</td>
                              <td>London</td>
                              <td>47</td>
                              <td>2009/10/09</td>
                              <td>$1,200,000</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Ashton Cox</td>
                              <td>Junior Technical Author</td>
                              <td>San Francisco</td>
                              <td>66</td>
                              <td>2009/01/12</td>
                              <td>$86,000</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Bradley Greer</td>
                              <td>Software Engineer</td>
                              <td>London</td>
                              <td>41</td>
                              <td>2012/10/13</td>
                              <td>$132,000</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Brenden Wagner</td>
                              <td>Software Engineer</td>
                              <td>San Francisco</td>
                              <td>28</td>
                              <td>2011/06/07</td>
                              <td>$206,850</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Brielle Williamson</td>
                              <td>Integration Specialist</td>
                              <td>New York</td>
                              <td>61</td>
                              <td>2012/12/02</td>
                              <td>$372,000</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Bruno Nash</td>
                              <td>Software Engineer</td>
                              <td>London</td>
                              <td>38</td>
                              <td>2011/05/03</td>
                              <td>$163,500</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Caesar Vance</td>
                              <td>Pre-Sales Support</td>
                              <td>New York</td>
                              <td>21</td>
                              <td>2011/12/12</td>
                              <td>$106,450</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Cara Stevens</td>
                              <td>Sales Assistant</td>
                              <td>New York</td>
                              <td>46</td>
                              <td>2011/12/06</td>
                              <td>$145,600</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Cedric Kelly</td>
                              <td>Senior Javascript Developer</td>
                              <td>Edinburgh</td>
                              <td>22</td>
                              <td>2012/03/29</td>
                              <td>$433,060</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-5">
                        <div
                          className="dataTables_info"
                          id="dataTable_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 10 of 57 entries
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7">
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="dataTable_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button page-item previous disabled"
                              id="dataTable_previous"
                            >
                              <a
                                href="#"
                                aria-controls="dataTable"
                                data-dt-idx="0"
                                tabIndex="0"
                                className="page-link"
                              >
                                Previous
                              </a>
                            </li>
                            <li className="paginate_button page-item active">
                              <a
                                href="#"
                                aria-controls="dataTable"
                                data-dt-idx="1"
                                tabIndex="0"
                                className="page-link"
                              >
                                1
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="dataTable"
                                data-dt-idx="2"
                                tabIndex="0"
                                className="page-link"
                              >
                                2
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="dataTable"
                                data-dt-idx="3"
                                tabIndex="0"
                                className="page-link"
                              >
                                3
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="dataTable"
                                data-dt-idx="4"
                                tabIndex="0"
                                className="page-link"
                              >
                                4
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="dataTable"
                                data-dt-idx="5"
                                tabIndex="0"
                                className="page-link"
                              >
                                5
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="dataTable"
                                data-dt-idx="6"
                                tabIndex="0"
                                className="page-link"
                              >
                                6
                              </a>
                            </li>
                            <li
                              className="paginate_button page-item next"
                              id="dataTable_next"
                            >
                              <a
                                href="#"
                                aria-controls="dataTable"
                                data-dt-idx="7"
                                tabIndex="0"
                                className="page-link"
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer small text-muted">
                Updated yesterday at 11:59 PM
              </div>
            </div>
          </div>

          <footer className="sticky-footer">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>{placeCopyright()}</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
