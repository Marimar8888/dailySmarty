import React, { Component } from 'react'

class Post extends Component {
  render() {
    return (
        <li>
        {/* {post.title} */}
        {this.props.name}
    </li>
    )
  }
}

export default Post;
