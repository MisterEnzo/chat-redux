import * as types from './action_types';

export function fetchMessages(channel) {
  // return { type: types.FETCH_MESSAGES, messages: [
  //   {
  //     "author":"anonymous92",
  //     "content":"payload",
  //     "created_at":"2017-09-26T23:03:16.365Z"
  //   }
  // ]}
  // ---
  return fetch('https://wagon-chat.herokuapp.com/general/messages')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return { type: types.FETCH_MESSAGES, messages: data.messages}
  })

}
