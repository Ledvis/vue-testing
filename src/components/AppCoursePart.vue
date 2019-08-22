<template>
  <a
    href="#"
    @click.prevent="play"
  >
    {{ part.title }}
  </a>
</template>

<script>
export default {
  name: 'AppCoursePart',
  props: {
    part: {
      type: Object,
      required: true
    }
  },
  methods: {
    play() {
      console.log('fuck you');
    }
  }
}
</script>

<style>

</style>