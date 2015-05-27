import React from 'react';
import $ from 'jquery';
import {CommentList} from './CommentList';
import {CommentForm} from './CommentForm';

export class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {data: []};
  }

  loadComments() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: data => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  handleCommentSubmit(comment) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: data => {
        this.setState({data: data});
      },
      error: (xhr, status, err)  => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  componentDidMount() {
    this.loadComments();
    // setInterval(this.loadComments.bind(this), this.props.pollInterval);
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
      </div>
    );
  }
}
