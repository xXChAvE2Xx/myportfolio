<template>
  <header>
    <Slide>
      <h1>Raul Chavez</h1>
      <a href="https://github.com/xXChAvE2Xx?tab=repositories" target="blank_">
        <span>All my proyects</span>
      </a>
    </Slide>
  </header>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import { Slide } from 'vue3-burger-menu';

export default {
  name: 'App',
  components: {
    Slide,
  },
};
</script>
