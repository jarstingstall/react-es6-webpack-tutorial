import React from 'react';
import marked from 'marked';

export class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: this.getMarkup()}}/>
      </div>
    );
  }

  getMarkup() {
    return marked(this.props.children.toString(), {sanitize: true});
  }
}
