<template>
    <div class="event-calendar">
      <h2>Event Calendar</h2>
      <ul>
        <li v-for="event in events" :key="event.id">{{ event.date }} - {{ event.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EventCalendar',
    data() {
      return {
        events: [
          { id: 1, date: '2024-06-20', name: 'Community Clean-Up' },
          { id: 2, date: '2024-06-25', name: 'Summer BBQ' },
          { id: 3, date: '2024-07-01', name: 'Fireworks Display' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .event-calendar {
    padding: 20px;
  }
  </style>
  