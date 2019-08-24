<template>
  <b>
    Hi, {{ $auth.user.name }}
  </b>
</template>

<script>
import authMixin from '@/mixins/authMixin.js'

export default {
  name: 'AppGreeting',
  mixins: [authMixin]
}
</script>

<style>

</style>