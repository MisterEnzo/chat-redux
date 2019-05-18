import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions/index';

import Message from '../components/message';

class Channel extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    setTimeout(()=> {
      this.props.fetchMessages()
    }, 3000);
  }
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

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
