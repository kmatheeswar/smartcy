<template>
    <div class="member-chat">
      <h2>Member Chat</h2>
      <ul>
        <li v-for="message in messages" :key="message.id">
          <strong>{{ message.user }}:</strong> {{ message.text }}
        </li>
      </ul>
      <input v-model="newMessage" placeholder="Type a message" @keyup.enter="sendMessage" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'MemberChat',
    data() {
      return {
        messages: [
          { id: 1, user: 'Alice', text: 'Hello everyone!' },
          { id: 2, user: 'Bob', text: 'Hi Alice!' }
        ],
        newMessage: ''
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim()) {
          this.messages.push({
            id: this.messages.length + 1,
            user: 'You',
            text: this.newMessage
          });
          this.newMessage = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .member-chat {
    padding: 20px;
  }
  .member-chat input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
  }
  </style>
  