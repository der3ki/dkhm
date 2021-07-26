<template>
  <div>
    <Banner :home="false" title="Background" image="https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/ageofsigmarmural.png?alt=media&token=fce2ebad-b15d-4aa7-bfe0-07a1f21c6f53"></Banner>
    <background/>
  </div>
</template>

<script>
import Banner from '../components/banner.vue';
import background from '../components/background.vue';
export default {
  name: 'Background',
  components: {
    Banner,
    background
  }
}
</script>

<style>

</style>
