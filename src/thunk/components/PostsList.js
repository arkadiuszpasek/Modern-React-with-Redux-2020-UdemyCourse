import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostsList extends React.Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    return (
      <div>PostList</div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsList);