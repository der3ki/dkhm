<template>
  <section>
    <Banner :home="false" title="Team " image="https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/ageofsigmarmural.png?alt=media&token=fce2ebad-b15d-4aa7-bfe0-07a1f21c6f53"></Banner>
    <team/>
  </section>
</template>

<script>
import Banner from '../components/banner.vue';
import team from '../components/team.vue';
export default {
  name: 'Team',
  components: {
    Banner,
    team
  },
}
</script>

<style>
    
</style>
