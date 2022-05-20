<template>
  <section class="hero is-halfheight" style="background-color: #1f2833">
    <div class="columns mt-5">
      <div class="column is-4 mt-6">
        <div class="image">
          <img
            class="is-rounded"
            src="../assets/pic1.jpg"
            style="width: 256px; float: right"
          />
        </div>
      </div>
      <div class="hero-body">
        <div class="column is-2">
          <p class="title" style="color: white">Raul Chavez</p>
          <hr />
          <p class="subtitle mt-3" style="color: white">
            Hello, I'm Raul. I studied Technical Programmer Analyst at the high
            school #12 of the Universidad de Colima. I also studied Telematic
            Engineering at the Faculty of Telematics and I did a bootcamp
            organized by innovaccion virtual where I learned a lot of things
            about frontend and backend such as Vue js and Node js. I like to
            always give my best and provide solutions to the problems presented
            and also love to spend my free time playing video games or with my
            family.
            <br />
          </p>

          <span class="icon">
            <i class="fas fa-envelope icon" style="font-size: 20px"></i>
          </span>
          <span
            ><strong class="text" style="font-size: 18px">
              raul25042000@hotmail.com</strong
            ></span
          ><br />

          <a href="https://github.com/xXChAvE2Xx" target="_blank">
            <span class="icon mt-2">
              <i class="fab fa-github icon" style="font-size: 20px"></i>
            </span>
            <span
              ><strong class="text" style="font-size: 16px">
                xXChAvE2Xx</strong
              ></span
            >
          </a>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container mt-5">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Skills</p>
            </div>
          </div>

          <div class="content">
            <div class="columns is-multiline">
              <div class="column is-6" v-for="(data, i) in skills" :key="i">
                <Progress
                  :lang="data.lang"
                  :level="data.level"
                  :num="data.num"
                  :url="data.url"
                  :color="data.color"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Proyectos />
  <Footer />
</template>

<script>
import Progress from './ProgressBar.vue';
import Proyectos from './Proyects.vue';
import Footer from './Footer.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Portfolio',
  components: { Progress, Footer, Proyectos },
  data() {
    return {
      skills: [
        {
          lang: 'JavaScript',
          level: 'Intermediate',
          num: '50',
          url: 'https://i.imgur.com/Buw4ffO.png',
          color: 'is-warning',
        },
        {
          lang: 'PHP',
          level: 'Intermediate',
          num: '50',
          url: 'https://i.imgur.com/7sKVVgG.png',
          color: 'is-info',
        },
        {
          lang: 'NodeJS',
          level: 'Basic',
          num: '25',
          url: 'https://i.imgur.com/OOkygXN.png',
          color: 'is-primary',
        },
        {
          lang: 'VueJS',
          level: 'Basic',
          num: '25',
          url: 'https://i.imgur.com/65QJ1B2.png',
          color: 'is-primary',
        },
      ],
    };
  },
};
</script>

<style>
.icon {
  color: white;
}

.icon:hover {
  color: rgb(17, 177, 226);
}

.text {
  color: white;
  size: 17px;
}

.text:hover {
  color: rgb(17, 177, 226);
}
</style>
