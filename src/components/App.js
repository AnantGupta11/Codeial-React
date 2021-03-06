import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/posts';
import { Navbar,Home,Page404,Login,SignUp } from './';
import  jwtDecode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';

const Settings = ()=> <div>Setting</div>

const PrivateRoute= (privateRouteProps)=>{
    const { isLoggedIn, path, component:Component } = privateRouteProps;
    return <Route path={path} render={(props)=>{
        return isLoggedIn ? <Component {...props} />:
        <Redirect to="/login" />
    }}/>
};

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token =localStorage.getItem('token');

    if(token){
        const user=jwtDecode(token);
        console.log('user',user);
        this.props.dispatch(authenticateUser({
            email:user.email,
            _id:user._id,
            name:user.name,
        }));
    }
  }
  
  render() {
    const { posts,auth } =this.props;
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
            <Route path="/register" component={SignUp}/>
            <PrivateRoute path="/settings" component={Settings} isLoggedIn={auth.isLoggedIn} />
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
    auth:state.auth
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
}
export default connect(mapStateToProps)(App);