// Code EyesOnMe Component Here

import React from 'react'

export default class EyesOnMe extends React.Component{
  focusFunction = () => {
    console.log("Good!")
  }

  blurFunction = () => {
    console.log("Hey! Eyes on me!")
  }
  render(){
    return(
      <button onBlur={this.blurFunction} onFocus={this.focusFunction}/>
    )
  }
}
