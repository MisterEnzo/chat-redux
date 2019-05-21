import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { postMessage } from '../actions/index';

class MessageBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    };
  }

  onFormChange = (message) => {
    this.setState({
      message: message
    })
  }

  render() {
    return (
      <div>
        <div>Message Bar Button</div>
        <input type='text' value={this.state.message} onChange={(event) => this.onFormChange(event.target.value)} />
        <input type='submit' value='Submit'
               onClick={() => this.props.postMessage(this.props.currentUser, this.state.message)}
               className='btn'/>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {postMessage: postMessage},
    dispatch
)};

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageBar);
