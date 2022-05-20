<template>
  <section class="hero is-halfheight" style="background-color: #1f2833">
    <div class="columns mt-5">
      <div class="column is-4 mt-6">
        <div class="image pic">
          <img class="is-rounded" src="../assets/pic1.jpg" />
        </div>
      </div>
      <div class="hero-body">
        <div class="column is-2">
          <p class="title" style="color: white">Raul Chavez</p>
          <hr />
          <p class="subtitle mt-3 has-text-justified" style="color: white">
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
          <div>
            <DownloadCv />
          </div>
          <br />
          <div class="iconos">
            <div>
              <a
                id="icono-zoom"
                href="https://github.com/xXChAvE2Xx"
                target="_blank"
                ><font-awesome-icon :icon="['fab', 'github']" class="fa-2x"
              /></a>
            </div>
            <div>
              <a
                id="icono-zoom"
                href="https://www.linkedin.com/in/raul-antonio-chavez-aguirre-26247b218/"
                target="_blank"
                ><font-awesome-icon :icon="['fab', 'linkedin']" class="fa-2x"
              /></a>
            </div>
            <div>
              <a
                id="icono-zoom"
                href="https://www.instagram.com/ra.ca30/"
                target="_blank"
                ><font-awesome-icon :icon="['fab', 'instagram']" class="fa-2x"
              /></a>
            </div>
            <div class="is-hidden-desktop">
              <a id="icono-zoom" href="tel:+523122090247" target="_blank"
                ><font-awesome-icon :icon="['fa', 'phone']" class="fa-2x"
              /></a>
            </div>
            <div class="is-hidden-desktop">
              <a
                id="icono-zoom"
                href="mailto:raul25042000@hotmail.com"
                target="_blank"
                ><font-awesome-icon :icon="['fa', 'envelope']" class="fa-2x"
              /></a>
            </div>
          </div>

          <br />
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
import DownloadCv from './ShowCV.vue';
import Footer from './Footer.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Portfolio',
  components: { Progress, Footer, Proyectos, DownloadCv },
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
      iconos: [
        {
          type: 'github',
          icono: "['fab', 'github']",
        },
      ],
    };
  },
};
</script>

<style>
.iconos {
  display: flex;
  justify-content: space-around;
}

#icono-zoom {
  color: white !important;
}

#icono-zoom:hover {
  zoom: 120%;
}

.iconos:hover {
  color: rgb(17, 177, 226);
}

.text {
  color: white;
  size: 17px;
}

.text:hover {
  color: rgb(17, 177, 226);
}
.pic {
  width: 256px;
  float: right;
}

@media only screen and (max-width: 430px) {
  .pic {
    width: 196px;
    float: initial;
  }
}
</style>
