<template>
  <input
    type="text"
    :value="inputValue"
    @input="$emit('inputUpdate', $event.target.value)"
  >
</template>

<script>
export default {
  name: 'AppHomeInput',
  model: {
    prop: 'inputValue',
    event: 'inputUpdate'
  },
  props: {
    inputValue: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>