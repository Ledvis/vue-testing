<template>
  <div>
    <AppCoursePart
      v-for="part in course.parts"
      :key="part.id"
      :part="part"
    />
  </div>
</template>

<script>
import AppCoursePart from '@/components/AppCoursePart'

export default {
  name: 'AppCoursePlEaylist',
  components: {
    AppCoursePart
  },
  props: {
    course: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>