<template>
  <div class="home">
    <AppHomeInput v-model="body" />
    {{ body }}
  </div>
</template>

<script>
import AppHomeInput from '../components/AppHomeInput'

export default {
  name: 'Home',
  components: {
    AppHomeInput
  },
  data() {
    return {
      body: ''
    }
  }
}
</script>
