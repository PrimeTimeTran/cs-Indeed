import React from "react";

import {
  Carousel
} from "react-bootstrap";

// import "../css/team.css"

export default function TeamPage() {
  return (
    <div className="fluid-container">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/RCAhiGJsUUE/1920x1080"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/wfh8dDlNFOk/1920x1080"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/O7fzqFEfLlo/1920x1080"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img
                src="https://source.unsplash.com/TMgQMXoglsM/500x350"
                className="card-img-top"
                alt=""
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Team Member</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img
                src="https://source.unsplash.com/9UVmlIb0wJU/500x350"
                className="card-img-top"
                alt=""
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Team Member</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img
                src="https://source.unsplash.com/sNut2MqSmds/500x350"
                className="card-img-top"
                alt=""
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Team Member</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img
                src="https://source.unsplash.com/ZI6p3i9SbVU/500x350"
                className="card-img-top"
                alt=""
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Team Member</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
