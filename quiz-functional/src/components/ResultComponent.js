import '../App.css'

import React, { Component } from 'react'

export default class ResultComponent extends Component {
  render() {
    return (
      <div className='resultouterdiv'>
        <h1 className='resulth1'>Result</h1>
        <div className='resultdiv'>
            <h2>You need more practice!</h2>
            <h1>Your score is 20%</h1>
            <div className='stats'>
                <p>Total no. of questions</p><p>15</p>
                <p>Number of attempted questions</p><p>9</p>
                <p>Number of Correct answers</p><p>3</p>
                <p>Number of wrong answers</p><p>6</p>
            </div>
        </div>
        <button className='playagain'>Play Again</button>
        <button className='backhome'>Back to Home</button>
      </div>
    )
  }
}
