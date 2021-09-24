<template>
  <ul>
    <li
      :style="{
        backgroundImage:
          'url(https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/podcast_background.jpg?alt=media&token=f6b18cef-fac2-4447-9dab-4575772a9e3c)',
      }"
    >
      <div>
        <p class="dkhm_font">Podcast</p>
        <a
          href="https://www.youtube.com/playlist?list=PL3u7uk_4EFeX1z8DA15IM0UnouBcZy9ZS"
          title="Lista de Podcast"
          target="_blank"
          >Ver aquí</a
        >
      </div>
    </li>
    <li
      :style="{
        backgroundImage:
          'url(https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/lore_background.jpg?alt=media&token=5c59788f-7de3-432e-bba7-efcbb1dcada0)',
      }"
    >
      <div>
        <p class="dkhm_font">Trasfondo</p>
        <a
          href="https://www.youtube.com/watch?v=MbRYG5ePVYc&list=PL3u7uk_4EFeXoxUxbqCAAs92j0NSkytGa"
          title="Lista de Trasfondo"
          target="_blank"
          >Ver aquí</a
        >
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "bannerColumn",
  components: {},
};
</script>
<style scoped>
p {
  font: 300 16px/1.5 "Poppins", sans-serif;
  margin: 20px 0;
  color: #ffffff;
}
ul {
  margin: 25px -15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
ul > li {
  width: 100%;
  padding: 50px 0;
  background-size: cover;
  background-position: center center;
}
a {
  color: #ffffff;
  text-decoration: none;
  font: 500 14px/1 "Poppins", sans-serif;
}
@media (min-width: 601px) {
  ul {
    flex-direction: row;
  }
}
</style>
