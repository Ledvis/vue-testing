<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AppNotification />
  </div>
</template>

<script>
import AppNotification from '@/components/AppNotification'

export default {
  name: 'About',
  components: {
    AppNotification
  }
}
</script>