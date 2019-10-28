import React, { Component } from 'react'

export default class Comment extends Component {

    render(props){
        return (
            <div className='comment'>
                Comment: {this.props.commentText}
            </div>
        )
    }

}