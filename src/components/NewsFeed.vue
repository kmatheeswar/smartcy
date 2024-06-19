<template>
    <div class="news-feed">
      <h2>Community News</h2>
      <ul>
        <li v-for="news in newsList" :key="news.id">{{ news.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewsFeed',
    data() {
      return {
        newsList: [
          { id: 1, title: 'Community Event this Saturday!' },
          { id: 2, title: 'New Community Garden Opens' },
          { id: 3, title: 'Weekly Yoga Classes Available' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .news-feed {
    padding: 20px;
  }
  </style>
  