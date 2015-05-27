import React from 'react';
import $ from 'jquery';
import {CommentList} from './CommentList';
import {CommentForm} from './CommentForm';

export class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {data: []};
  }

  componentDidMount() {
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

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm />
      </div>
    );
  }
}
