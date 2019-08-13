<template>
  <div>
    <b>Notifications:</b>
    <ul>
      <li
        v-for="(notification, i) in notifications"
        :key="i"
      >
        {{ notification.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AppNotification',
  data() {
    return {
      notifications: []
    }
  },
  async created() {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');

    this.notifications = data;
  }
}
</script>

<style>

</style>