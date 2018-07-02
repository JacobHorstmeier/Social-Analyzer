import React, { Component } from "react";
import { getUser, getUserInfo } from "./../../ducks/user";
import { connect } from "react-redux";
import Header from '../Header/Header';
import './Private.css';
import axios from 'axios';
class Private extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editToggle: false,
      id: 1,
      bio: '',
      editBio: '',
      editEmail: '',
      user_name: '',
      picture: '',
      auth_id: '',
      email: ''

    }
  }

  componentDidMount() {
    this.props.getUserInfo().then(() => {
      this.setState({
        user_name: this.props.user[0].user_name,
        picture: this.props.user[0].picture,
        auth_id: this.props.user[0].auth_id,
        bio: this.props.user[0].bio,
        email: this.props.user[0].email
      })
    });
  }


  // edit(id) {
  //   let body = {
  //     id: this.state.id,
  //     bio: this.state.editBio,
  //     email: this.state.editEmail
  //   }
  //   axios.put('/api/updateProfile/', body).then(res => {
  //     this.props.getUserInfo().then(() => {
  //       this.setState({
  //         user_name: this.props.user[0].user_name,
  //         picture: this.props.user[0].picture,
  //         auth_id: this.props.user[0].auth_id,
  //         bio: this.props.user[0].bio,
  //         email: this.props.user[0].email
  //       })
  //     })
  //   })
  // }

  // editEvent(event) {
  //   let eventsCopy = this.state.events.slice()
  //   for (let i = 0; i < eventsCopy.length; i++) {
  //     if(eventsCopy[i].id === event.id) {
  //       eventsCopy[i] = event
  //     }
  //   }
  //   this.setState({events: eventsCopy})
  // }

  editClick() {
    if (this.state.editToggle) {
      let body = {
        id: this.state.id,
        bio: this.state.editBio,
        email: this.state.editEmail
      }
      axios.put('/api/updateProfile/', body).then(res => {
        this.props.getUserInfo().then(() => {
          this.setState({
            user_name: this.props.user[0].user_name,
            picture: this.props.user[0].picture,
            auth_id: this.props.user[0].auth_id,
            bio: this.props.user[0].bio,
            email: this.props.user[0].email
          })
        })
      })
    }
    this.setState({ editToggle: !this.state.editToggle })
  }


  render() {
    console.log(this.state)
    let { user_name, picture, auth_id, bio, email } = this.state;
    return (
      <div >
      
      <div className='upper'>

        <Header />
        <div className='Private'>
          <h2>Account Information:</h2>
          <hr />
          {user_name ? (
            <div>
              <img src={picture} alt="" />
              {/* <textarea rows='4' cols='50'></textarea> */}
              <p>About Me: {bio}</p>
              <p>Email: {email}</p>
              <p>Account Name: {user_name}</p>
              <p>Account Number: {auth_id}</p>

            </div>
          ) : (
              <p>Please login</p>
            )}
          <a href={process.env.REACT_APP_LOGOUT}>
            <button type="" className="">
              Logout
          </button>
          </a>
          {
            this.state.editToggle
              ?
              <div>
                <textarea placeholder='Description' value={this.state.editBio} onChange={e => this.setState({ editBio: e.target.value })} /><br />
                <input placeholder='New Email' value={this.state.editEmail} onChange={e => this.setState({ editEmail: e.target.value })} />
              </div>
              :
              <div>
                <h4></h4>
                <h4></h4>
              </div>
          }
          <button onClick={() => this.editClick()}>{this.state.editToggle ? 'Save' : 'Edit'}</button>

        </div>
        
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

export default connect(mapStateToProps, { getUser, getUserInfo })(Private);