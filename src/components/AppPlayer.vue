<template>
  <div>
    This is player
  </div>
</template>

<script>
export default {
  name: 'AppPlayer',
  data() {
    return {
      info: 'hello'
    }
  },
  destroyed() {
    this.info = null;
  }
}
</script>

<style>

</style>