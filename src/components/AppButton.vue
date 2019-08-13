<template>
  <router-link :to="to">
    {{ text }}
  </router-link>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      type: [Object, String],
      default: ''
    }
  }
}
</script>

<style>

</style>