<template>
  <div class="container">
    <header>
      <Slide width="350">
        <h1>Raúl Chávez</h1>
        <a id="white" href="mailto:raul25042000@hotmail.com">
          <span><font-awesome-icon :icon="['fa', 'envelope']" /></span>
          &nbsp;raul25042000@hotmail.com
        </a>
        <a
          href="https://github.com/xXChAvE2Xx?tab=repositories"
          target="blank_"
        >
          <span>All my proyects</span>
        </a>
      </Slide>
    </header>

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
<style>
#white {
  color: white !important;
}
</style>
