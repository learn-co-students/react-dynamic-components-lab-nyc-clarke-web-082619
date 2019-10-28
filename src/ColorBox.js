import React, { Component } from 'react';

export default class ColorBox extends Component {
  newOpacity = this.props.opacity - .1
  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= .2 ? <ColorBox opacity= {this.newOpacity} />: null }
      </div>
    )
  }
  
}
