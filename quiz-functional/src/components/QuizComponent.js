import '../App.css'
import data from '../resources/quizQuestion.json'

import React, { Component } from 'react'

export default class QuizComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    previous(){
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }
    }
    next(){
        if(this.state.count<14){
            this.setState({count:this.state.count+1})
            console.log(this.count)
        }
    }
    quit(){
        window.alert('are you sure you want to quit')
        this.setState({count:0})
    }
  render() {
    return (
      <div className='questiondiv'>
        <h1 className='questiontitle'>Question</h1>
        <p className='quesno'>{this.state.count +1} of 15</p>
        <h1 className='question'>{data[this.state.count].question}</h1>
        <div className='optiondiv'>
        <button>{data[this.state.count].optionA}</button>
        <button>{data[this.state.count].optionB}</button>
        <button>{data[this.state.count].optionC}</button>
        <button>{data[this.state.count].optionD}</button>
        </div>
        <div className='buttons'>
            <button onClick={()=>this.previous()}>Previous</button>
            <button onClick={()=>this.next()}>Next</button>
            <button onClick={()=>this.quit()}>Quit</button>
        </div>
      </div>
    )
  }
}
