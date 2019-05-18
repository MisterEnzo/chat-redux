import * as types from './action_types';

// export function fetchMessagesSuccess(messages) {
//   return { type: types.FETCH_MESSAGES, messages: [
//     {
//       "author":"anonymous92",
//       "content":"payload",
//       "created_at":"2017-09-26T23:03:16.365Z"
//     }
//   ]}
// }

export function fetchMessages(channel) {
  // fetch('https://wagon-chat.herokuapp.com/general/messages')
  // .then(response => response.json())
  // .then(data => {
    return { type: types.FETCH_MESSAGES, messages: [
      {
        "author":"anonymous92",
        "content":"payload",
        "created_at":"2017-09-26T23:03:16.365Z"
      }
    ]}
  // })
  // return function(dispatch) {
  //   return fetch('https://wagon-chat.herokuapp.com/general/messages')
  //   .then(response => response.json())
  //   .then(data => {
  //    dispatch(fetchMessagesSuccess(data.channel))
  //   })
    // .then(data => return {type: types.};
    // return {type: types.FETCH_MESSAGES, payload: [
    //   {
    //     "author":"anonymous92",
    //     "content":"payload",
    //     "created_at":"2017-09-26T23:03:16.365Z"
    //   }
    // ]}
  // };
}
