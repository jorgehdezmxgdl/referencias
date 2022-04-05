import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       nombre : ''
    }
  }

  captura(e) {
    this.setState({ 
      nombre : this.a.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" ref={(miko) => {this.a = miko}}  onChange={this.captura.bind(this)} />
        <p>{this.state.nombre}</p>
      </div>
    )
  }
}
