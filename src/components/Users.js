import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => 
      <li key={index}><b>User:</b> {user.username} <b>Hometown:</b> {user.hometown}</li>);

    return (
      <div>
        {this.props.userNumber}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userNumber: state.users.length
  }
}

export default connect(mapStateToProps)(Users);
