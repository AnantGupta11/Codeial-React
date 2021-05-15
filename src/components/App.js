import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router,Link,Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/posts';
import { PostsList,Navbar } from './';

const Login = () =><div>Login</div>;

const SignUp = () =><div>SignUp</div>;

const Home = () =><div>Home</div>;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  
  render() {
    const { posts } =this.props;
    console.log('Props',this.props);
    return (
      <Router>
        <div>
          <Navbar />
           <ul>
             <li>
               <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/login">Login</Link>
             </li>
             <li>
               <Link to="/signup">SignUp</Link>
             </li>
           </ul>
          {/* <PostsList posts={posts}/> */}
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
        </div>
      </Router>
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