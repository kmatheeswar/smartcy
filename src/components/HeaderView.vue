<template>
  <div id="app">
    <header class="header">
        <h1>Smart Community</h1>
        <nav>
          <router-link to="/">Home</router-link>|
          <router-link v-if="!user" to="/login">Login</router-link>|
          <router-link v-if="!user" to="/register">Register</router-link>
          <button v-if="user" @click="logout">Logout</button>
        </nav>
    </header>
    <router-view />
  </div>
</template>
  
  <script>
  export default {
    name: 'HeaderView'
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #3b5998;
    color: white;
    padding: 10px;
    text-align: center;
  }
  </style>
  