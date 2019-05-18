import * as types from '../actions/action_types';
import initialState from './initial_state';

export default function messagesReducer(state = initialState.messages, action){
  switch (action.type){
    case types.FETCH_MESSAGES:
      return action.messages;
    default:
      return state;
  }
}
