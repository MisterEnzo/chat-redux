import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from '../components/message';

class Channel extends Component {
  render() {
    return(
      <div>
        <h1>Channel</h1>
        {this.props.messages.map(({ author, content, created_at }) => {
          return(
            <Message author={author} content={content} timeStamp={created_at}
                     key={created_at} />
          )
        })}

      </div>
    )
  }
};

function mapStateToProps(state){
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, null)(Channel);
