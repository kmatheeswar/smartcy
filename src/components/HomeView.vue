<template>
    <div>
      <h1>Welcome to Smart Community!</h1>
      <p>You are logged in as {{ user?.email }}</p>
    </div>
  </template>
  
  <script>
  import { auth } from '../firebase';
  
  export default {
    data() {
      return {
        user: null
      };
    },
    created() {
      this.user = auth.currentUser;
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  