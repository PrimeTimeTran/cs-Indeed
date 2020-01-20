/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { placeCopyright } from "../utils";

export default function Portfolio() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            Indeed
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="bg-primary py-5 mb-5">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-12">
              <h1 className="display-4 text-white mt-5 mb-2">
                Business Name or Tagline
              </h1>
              <p className="lead mb-5 text-white-50">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                possimus ab labore provident mollitia. Id assumenda voluptate
                earum corporis facere quibusdam quisquam iste ipsa cumque unde
                nisi, totam quas ipsam.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5">
            <h2>What We Do</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              deserunt neque tempore recusandae animi soluta quasi? Asperiores
              rem dolore eaque vel, porro, soluta unde debitis aliquam
              laboriosam. Repellat explicabo, maiores!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              optio neque consectetur consequatur magni in nisi, natus beatae
              quidem quam odit commodi ducimus totam eum, alias, adipisci
              nesciunt voluptate. Voluptatum.
            </p>
            <a className="btn btn-primary btn-lg" href="#">
              Call to Action »
            </a>
          </div>
          <div className="col-md-4 mb-5">
            <h2>Contact Us</h2>
            <hr />
            <address>
              <strong>Start Bootstrap</strong>
              <br />
              3481 Melrose Place
              <br />
              Beverly Hills, CA 90210
              <br />
            </address>
            <address>
              <abbr title="Phone">P:</abbr>
              (123) 456-7890
              <br />
              <abbr title="Email">E:</abbr>
              <a href="mailto:#">name@example.com</a>
            </address>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="http://placehold.it/300x200"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque sequi doloribus.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="http://placehold.it/300x200"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque sequi doloribus totam ut
                  praesentium aut.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <img
                alt=""
                className="card-img-top"
                src="http://placehold.it/300x200"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">{placeCopyright()}</p>
        </div>
      </footer>
    </div>
  );
}
