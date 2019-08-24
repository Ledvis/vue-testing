<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AppForm />
    <br><br>
    <AppList />
  </div>
</template>

<script>
import AppForm from '@/components/AppForm'
import AppList from '@/components/AppList'

export default {
  name: 'About',
  components: {
    AppForm,
    AppList
  }
}
</script>