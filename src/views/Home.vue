<template>
  <div class="home">
    <AppSignIn />
    <AppCoursePlaylist
      :course="{
        parts: [
          {id: 1, title: 'One'},
          {id: 2, title: 'Two'}
        ]
      }"
    />
    <br>
    <br>
    <AppCountdown :start="5" />
    <br><br>
    <AppGreeting />
  </div>
</template>

<script>
import AppSignIn from '@/components/AppSignIn'
import AppCoursePlaylist from '@/components/AppCoursePlaylist'
import AppCountdown from '@/components/AppCountdown'
import AppGreeting from '@/components/AppGreeting'

export default {
  name: 'Home',
  components: {
    AppSignIn,
    AppCoursePlaylist,
    AppCountdown,
    AppGreeting
  },
}
</script>
