import React from 'react';
import {connect} from 'react-redux';

import { fetchPosts } from '../actions/posts';
import { PostsList } from './';
import PropTypes from 'prop-types';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  
  render() {
    const { posts } =this.props;
    console.log('Props',this.props);
    return (
      <div>
        <PostsList posts={posts}/>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    posts:state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
}
export default connect(mapStateToProps)(App);