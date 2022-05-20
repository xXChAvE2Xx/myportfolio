<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-16by9">
        <img class="zoom-img" :src="cardImg" :alt="name" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ name }}</p>
          <p class="subtitle is-6">{{ contributors }}</p>
        </div>
      </div>
      <div class="content">
        {{ desc }}
        <a :href="url">Ver en {{ verEn }}</a>
        <br />
        <span :class="classe">{{ lenguage }}</span>
        <br />
        <time datetime="2016-1-1">{{ date }}</time>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    cardImg: String,
    desc: String,
    url: String,
    contributors: String,
    date: String,
    lenguage: String,
    classe: String,
    verEn: String,
  },
};
</script>
