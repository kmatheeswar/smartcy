<template>
  <div id="app">
    <HeaderView />
    <main>
      <HomeView/>
      <NewsFeed />
      <EventCalendar />
      <MemberChat />
    </main>
    <FooterView />
  </div>
</template>

<script>
import NewsFeed from './components/NewsFeed.vue';
import EventCalendar from './components/EventCalendar.vue';
import MemberChat from './components/MemberChat.vue';
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';
import HomeView from './components/HomeView.vue';
import { auth } from './firebase';

export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView,
    NewsFeed,
    EventCalendar,
    MemberChat,
    HomeView
  },
  data() {
    return {
      user: null
    };
  },
  created() {
    auth.onAuthStateChanged(user => {
      this.user = user;
    });
  },
  methods: {
    async logout() {
      await auth.signOut();
      this.$router.push('/login');
    }
  }
};
</script>

<style>
main {
  padding: 20px;
}
</style>
