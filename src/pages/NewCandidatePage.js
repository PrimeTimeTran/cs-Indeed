import React, { Component } from 'react'

export default class NewCandidatePage extends Component {
  createCandidate = () => {
    const { firstName, lastName, company } = this.state
    const data = {
      company,
      first_name: firstName,
      last_name: lastName,
    }
    const config = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(data),
  }
    fetch("http://localhost:3001/candidates", config)
  }

  render() {
    return (
      <div>
        <h1>New Candidate Form</h1>
        <h3>First Name</h3>
        <input onChange={(e) => this.setState({ firstName: e.target.value })}/>
        <h3>Last Name</h3>
        <input onChange={(e) => this.setState({ lastName: e.target.value })}/>
        <h3>Company</h3>
        <input onChange={(e) => this.setState({ company: e.target.value })}/>
        <button onClick={this.createCandidate}>Add Candidate </button>
      </div>
    )
  }
}
