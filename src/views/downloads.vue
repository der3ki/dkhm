<template>
  <section>
    <Banner :home="false" title="Descargas" image="https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/ageofsigmarmural.png?alt=media&token=fce2ebad-b15d-4aa7-bfe0-07a1f21c6f53"></Banner>
    <downloads/>
  </section>
</template>

<script>
import Banner from '../components/banner.vue';
import downloads from '../components/downloads.vue';
export default {
  name: 'Download',
  components: {
    Banner,
    downloads
  },
}
</script>

<style>

</style>
