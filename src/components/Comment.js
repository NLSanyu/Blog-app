import React, { Component } from 'react';

export class Comment extends Component {
    render () {
      return (
         <div className="Comment">
          <p className="CommentUserInfo">{this.props.author.name} commented:</p>
          <p>{this.props.text}</p>
         </div>
      );
    }
}

export default Comment
