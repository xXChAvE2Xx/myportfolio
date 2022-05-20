<template>
  <section>
    <div class="container mt-5">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Proyects</p>
            </div>
          </div>

          <div class="content">
            <div class="columns is-multiline">
              <div class="column is-6" v-for="(data, i) in proyects" :key="i">
                <Proyects
                  :name="data.name"
                  :cardImg="data.cardImg"
                  :desc="data.desc"
                  :url="data.url"
                  :contributors="data.contributors"
                  :date="data.date"
                  :lenguage="data.lenguage"
                  :classe="data.classe"
                  :verEn="data.verEn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Proyects from './CardsProyects.vue';
export default {
  components: { Proyects },
  name: 'MyProyects',
  data() {
    return {
      proyects: [
        {
          name: 'Visual-Thinking-API',
          cardImg:
            'https://user-images.githubusercontent.com/54995852/167043222-64427a25-da21-4ed8-a5f5-561eb7a0015a.svg',
          desc: 'First API developed in the Launch X bootcamp.',
          url: 'https://github.com/xXChAvE2Xx/Visual-Thinking-API',
          contributors: 'Raúl Chávez',
          date: '4 de Mayo del 2022',
          lenguage: 'JavaScript',
          classe: 'tag is-warning',
          verEn: 'Github',
        },
        {
          name: 'Pokedex',
          cardImg: 'https://i.imgur.com/Vs1AUZw.png',
          desc: 'Web application to search by name or number any Pokémon, when searching the pokedex will show basic information of the Pokémon. I used PokeAPI for all the information. ',
          url: 'https://pokedex-rho-ashen.vercel.app/',
          contributors: 'Raúl Chávez',
          date: '22 de Marzo del 2022',
          lenguage: 'HTML, CSS & JavaScript',
          classe: 'tag is-primary',
          verEn: 'Web',
        },
        {
          name: 'Vaccination',
          cardImg: 'https://i.imgur.com/o5jTmBt.png',
          desc: 'Frontend practice of the bootcamp Launch X, the practice was to make a copy of a given UI design.',
          url: 'https://vaccination-covid19.vercel.app/',
          contributors: 'Raúl Chávez',
          date: '12 de Marzo del 2022',
          lenguage: 'HTML & CSS',
          classe: 'tag is-primary',
          verEn: 'Web',
        },
        {
          name: 'Certimax',
          cardImg: 'https://i.imgur.com/eOQsdED.png',
          desc: 'Página web que cuenta con un formulario para participantes de radioaficionados y creador de constancias de forma automática, el sistema también se encarga de enviar las constancias a los usuarios que contestaron el formulario. Este sitio fue hecho por petición del profesor Omar Álvarez Cárdenas.',
          url: 'https://github.com/xXChAvE2Xx/certimax',
          contributors: 'Raúl Chávez and Marcelo Ramírez',
          date: '8 de Enero del 2021',
          lenguage: 'PHP',
          classe: 'tag is-info',
          verEn: 'Github',
        },
        {
          name: 'Agromed',
          cardImg: 'https://i.imgur.com/Ag4pcq3.png',
          desc: 'School project, in which a PWA was to be created, we chose to create a web application to identify pest diseases through a small form.',
          url: 'https://github.com/xXChAvE2Xx/Agromed',
          contributors: 'Raúl Chávez, Gustavo Estudillo and Marcelo Ramírez',
          date: '27 de Diciembre del 2020',
          lenguage: 'PHP',
          classe: 'tag is-info',
          verEn: 'Github',
        },
      ],
    };
  },
};
</script>
