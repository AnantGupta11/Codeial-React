import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/posts';
import { Navbar,Home,Page404 } from './';

const Login = () =><div>Login</div>;

const SignUp = () =><div>SignUp</div>;



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
           
          <Switch>
            <Route exact path="/" render={(props)=>{
              return <Home {...props} posts={posts}/>
            }}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route  component={Page404}/>
          </Switch>
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