import '../App.css'
import React, { Component } from 'react'

export default class HomeComponent extends Component {
  render() {
    return (
      <div className='HomeComp'>
        <h1 className='HomeTitle'>Quiz App</h1>
        <button className='Playbutton'>Play</button>
      </div>
    )
  }
}
