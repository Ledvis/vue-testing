<template>
  <p>
    Go to <router-link :to="{name: 'about', query: {redirect: $route.fullPath}}">
      about
    </router-link> page
  </p>
</template>

<script>
export default {
  name: 'AppSignIn'
}
</script>

<style>

</style>