import React from 'react';
import {CommentBox} from './CommentBox';

React.render(
  <CommentBox url="comments.json"/>,
  document.getElementById('container')
);