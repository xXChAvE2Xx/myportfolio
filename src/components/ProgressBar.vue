<template>
  <article class="media">
    <figure class="media-left ml-1">
      <p class="image is-64x64">
        <img :src="url" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column">
            <span
              ><b style="font-size: 20px">{{ lang }} : </b></span
            >
          </div>
          <div class="column">
            <b style="float: right">{{ level }}</b>
          </div>
        </div>
        <progress class="progress mt-3" :value="num" max="100" :class="color">
          num
        </progress>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    lang: String,
    level: String,
    num: String,
    color: String,
    url: String,
  },
};
</script>

<style></style>
