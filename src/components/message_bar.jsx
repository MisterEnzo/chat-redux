import React, { Component } from 'react';

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
        <input type='submit' value='Submit' className='btn'/>
      </div>
    );
  }

};

export default MessageBar;
