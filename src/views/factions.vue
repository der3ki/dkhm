<template>
  <section>
    <Banner :home="false" title="Faction Focus" image="https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/ageofsigmarmural.png?alt=media&token=fce2ebad-b15d-4aa7-bfe0-07a1f21c6f53"></Banner>
    <factionFocus></factionFocus>
  </section>
</template>

<script>
import Banner from '../components/banner.vue';
import factionFocus from '../components/factionfocus.vue';
export default {
  name: 'Factions',
  components: {
    Banner,
    factionFocus
  }
}
</script>

<style>

</style>
