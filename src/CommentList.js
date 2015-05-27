import React from 'react';
import {Comment} from './Comment';

export class CommentList extends React.Component {
  render() {
    return (
      <div className="commentList">
       {this.buildComments()}
      </div>
    );
  }

  buildComments() {
    return this.props.data.map(comment => {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
  }
}
