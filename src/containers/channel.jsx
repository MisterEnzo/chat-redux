import React, { Component } from 'react';

import Message from '../components/message';

class Channel extends Component {
  render() {
    return(
      <div>
        Channel
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    )
  }
};

export default Channel;
