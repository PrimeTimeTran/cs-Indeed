import React, { Component } from 'react'

export default class EditCandidatePage extends Component {
  state = {
    candidate: {}
  }
  async componentDidMount() {
    const response = await fetch(`http://localhost:3001/candidates/${this.props.match.params.id}`)
    const data = await response.json()
    this.setState({ candidate: data})
  }

  onEditCandidate = (id) => {
    const data = {
      first_name: 'Thien likes boys'
    }
    const config = {
      method: 'PUT',
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
    fetch(`http://localhost:3001/candidates/${id}`, config)
  }
  render() {
    return (
      <div>
        <input onChange={(e) => this.setState({ firstName: e.target.value})}/>
        <button onClick={() => this.onEditCandidate(this.state.candidate.id)}>Edit</button>
        <h1>{this.state.candidate.first_name}</h1>
        <h1>{this.state.candidate.last_name}</h1>
        <h1>{this.state.candidate.id}</h1>
        <h1>{this.state.candidate.company}</h1>
        <button onClick={() => this.props.history.push('/batman')}>Lalalal</button>
      </div>
    )
  }
}
