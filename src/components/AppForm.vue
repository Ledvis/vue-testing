<template>
  <form
    action="#"
    @submit.prevent="navigateAway"
  >
    <button type="submit">
      Go to Sign In
    </button>
  </form>
</template>

<script>
export default {
  name: 'AppFormVue',
  methods: {
    navigateAway() {
      if (this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect);
      } else {
        this.$router.push({name: 'signin'});
      }
    }
  }
}
</script>

<style>

</style>