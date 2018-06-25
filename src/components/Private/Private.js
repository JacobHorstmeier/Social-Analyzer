import React, { Component } from "react";
import { getUser } from "./../../ducks/user";
import { connect } from "react-redux";
import Header from '../Header/Header';
import './Private.css';

class Private extends Component {
  componentDidMount() {
    this.props.getUser();
  }



  render() {
    let { user_name, picture, auth_id } = this.props.user;
    return (
      <div>
      <Header />
      <div className='Private'>
        <h2>Account Information:</h2>
        <hr />
        {user_name ? (
          <div>
            <img src={picture} alt="" />
            <p>Account Name: {user_name}</p>
            <p>Account Number: {auth_id}</p>

          </div>
        ) : (
            <p>Please login</p>
          )}
        <a href="http://localhost:3007/auth/logout">
          <button type="" className="">
            Logout
          </button>
        </a>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getUser })(Private);