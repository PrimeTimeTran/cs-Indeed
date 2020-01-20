/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import { Helmet } from "react-helmet";

import { placeCopyright } from '../utils'

export default class CompanyPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Indeed - Hiring Portal</title>
        </Helmet>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">Punny headline</h1>
            <p className="lead font-weight-normal">
              And an even wittier subheading to boot. Jumpstart your marketing
              efforts with this example based on Apple's marketing pages.
            </p>
            <a className="btn btn-outline-secondary" href="#">
              Coming soon
            </a>
          </div>
          <div className="product-device box-shadow d-none d-md-block"></div>
          <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-light box-shadow mx-auto"></div>
          </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark box-shadow mx-auto"></div>
          </div>
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark box-shadow mx-auto"></div>
          </div>
          <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-light box-shadow mx-auto"></div>
          </div>
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-white box-shadow mx-auto"></div>
          </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-white box-shadow mx-auto"></div>
          </div>
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-white box-shadow mx-auto"></div>
          </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-white box-shadow mx-auto"></div>
          </div>
        </div>
        <section className="jumbotron text-center" style={{ height: "50vh" }}>
        <div className="container">
          <h1 className="jumbotron-heading">Album example</h1>
          <p className="lead text-muted">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </p>
          <p>
            <a href="#" className="btn btn-primary my-2">
              Main call to action
            </a>
            <a href="#" className="btn btn-secondary my-2">
              Secondary action
            </a>
          </p>
        </div>
      </section>
      <div className="container">
        <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
          Thumbnail Gallery
        </h1>

        <hr className="mt-2 mb-5" />

        <div className="row text-center text-lg-left">
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/pWkk7iiCoDM/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/aob0ukAYfuI/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/EUfxH-pze7s/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/M185_qYH8vg/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/sesveuG_rNo/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/AvhMzHwiE_0/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/2gYsZUmockw/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/EMSDtjVHdQ8/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/8mUEy0ABdNE/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/G9Rfc1qccH4/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/aJeH0KcFkuc/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/p2TQ-3Bh3Oo/400x300"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
        <footer className="container py-5">
          <div className="row">
            <div className="col-12 col-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="d-block mb-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
              </svg>
              <small className="d-block mb-3 text-muted">{placeCopyright()}</small>
            </div>
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="/login">
                    Login
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Random feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Team feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Stuff for developers
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Another one
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="/portfolio">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/dashboard">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Another resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#">
                    Business
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Education
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Government
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Gaming
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="/team">
                    Team
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Locations
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
