import React, { Component } from 'react';
import Comment from './Comment';

export class Article extends Component {
    render() {

      const comments = this.props.info.comments;

      return (
        <div className="Article">
          <p className="ArticleTitle">{this.props.info.title}</p>
          <p className="ArticleUserInfo">By {this.props.info.author.name}</p>
          <p className="ArticleText">{this.props.info.text}</p>
          <p className="CommentsTitle">Comments</p>
          <div className="CommmentsAll">
            {comments.map(
              comment => <Comment author={comment.author} text={comment.text}/>
            )}
          </div>
        </div>
        );
    }
}

export default Article