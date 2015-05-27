import React from 'react';
import {CommentBox} from './CommentBox';

require('./styles.css');

React.render(
  <CommentBox url="comments.json" pollInterval={5000}/>,
  document.getElementById('container')
);