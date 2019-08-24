<template>
  <div>
    List
    <ul>
      <li
        v-for="item in notifications"
        :key="item.id"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppList',
  computed: {
    ...mapGetters({
      notifications: 'notifications'
    })
  },
  mounted() {
    this.getNotifications();
  },
  methods: {
    ...mapActions({
      getNotifications: 'getNotifications'
    })
  }
}
</script>

<style>

</style>