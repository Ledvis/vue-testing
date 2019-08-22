<template>
  <div>
    {{ number }}
  </div>
</template>

<script>
export default {
  name: 'AppCountdown',
  props: {
    start: {
      type: Number,
      required: false,
      default: 5
    }
  },
  data() {
    return {
      number: this.start
    }
  },
  mounted() {
    const interval = setInterval(() => {
      this.number--

      if (this.number === 0) clearInterval(interval)
    }, 1000);
  }
}
</script>

<style>

</style>