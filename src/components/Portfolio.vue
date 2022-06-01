<template>
  <section class="hero is-halfheight" style="background-color: #607d8b">
    <div class="columns mt-5">
      <div class="column is-4 mt-6">
        <div class="image img-wrapper">
          <img class="is-rounded" src="../assets/pic1.jpg" />
        </div>
      </div>
      <div class="hero-body">
        <div class="column is-3">
          <p class="title" style="color: white">Raúl Chávez</p>
          <hr />
          <p class="subtitle mt-3 has-text-justified" style="color: white">
            Hi, I'm Raúl Chávez and I love Technology. My favorite areas are web
            development, computer networks and embedded systems. I like to spend
            my time creating web pages or learning new things, giving solutions
            to problems and I also like to eat Tacos and play videogames.<br />
            I'm from Mexico and I currently live in Colima City.
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
import DownloadCv from './DownloadCV.vue';
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
          level: 'Basic',
          num: '30',
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
        {
          lang: 'Linux',
          level: 'Intermediate',
          num: '55',
          url: 'https://i.imgur.com/JFz1rkj.png',
          color: 'is-dark',
        },
        {
          lang: 'Git',
          level: 'Basic',
          num: '45',
          url: 'https://i.imgur.com/3ERmSFz.png',
          color: 'is-danger',
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

.img-wrapper {
  width: 256px;
  float: right;
}

.img-wrapper img {
  width: 100%;
  display: block;
  border-radius: 50%;
}

.img-wrapper::before {
  content: '';
  position: absolute;
  inset: -15px;
  border: 6px solid #607d8b;
  border-top-color: #fff;
  border-bottom-color: #ababab;
  border-radius: 50%;
  z-index: 1;
  animation: spin 3s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 430px) {
  .img-wrapper {
    width: 196px;
    float: initial;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
