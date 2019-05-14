export default {
  channels: ['general', 'react', 'paris'],
  messages: [],
  selectedChannel: ['general'],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
}
