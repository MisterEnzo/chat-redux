import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChannelList extends Component {
  render() {
    return(
      <div>
        <h3>Channel List</h3>
        {this.props.channels.map((channel)=> {
          return (<p key={channel}>{channel}</p>)
        })}
      </div>
    )
  }
};

function mapStateToProps(state){
  return {
    channels: state.channels
  }
}

export default connect(mapStateToProps, null)(ChannelList);
