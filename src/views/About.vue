<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AppForm />
  </div>
</template>

<script>
import AppForm from '@/components/AppForm'

export default {
  name: 'About',
  components: {
    AppForm
  }
}
</script>