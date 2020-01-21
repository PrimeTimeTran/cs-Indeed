import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../css/login.css";

export default function LoginPage() {
  let history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.email);

  useEffect(() => {
    if (user) history.push("/candidates");
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    history.push("/dashboard");
    dispatch({ type: "SIGN_IN", payload: { email, password } });
  };

  return (
    <div id="login" className="fluid-container" style={{ height: "100vh" }}>
      <div className="row h-100 w-100 d-flex flex-column justify-content-center align-items-center">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form className="form-signin" onSubmit={onSubmit}>
                <div className="form-label-group">
                  <input
                    required
                    autoFocus
                    type="email"
                    className="form-control"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email address"
                  />
                  <label>Email address</label>
                </div>

                <div className="form-label-group">
                  <input
                    required
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                  />
                  <label for="inputPassword">Password</label>
                </div>

                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    id="customCheck1"
                    className="custom-control-input"
                  />
                  <label className="custom-control-label" for="customCheck1">
                    Remember password
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                >
                  Sign in
                </button>
                <hr className="my-4" />
                <button
                  type="submit"
                  className="btn btn-lg btn-google btn-block text-uppercase"
                >
                  <i className="fab fa-google mr-2"></i> Sign in with Google
                </button>
                <button
                  type="submit"
                  className="btn btn-lg btn-facebook btn-block text-uppercase"
                >
                  <i className="fab fa-facebook-f mr-2"></i> Sign in with
                  Facebook
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
