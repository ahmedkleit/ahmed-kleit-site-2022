<template>
  <div :style="{ color: fontColor }">
    <div class="about-container">
      <NuxtLink to="/" tag="h1"
        >Ahmed Kleit
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
          /></svg
      ></NuxtLink>

      <article>
        <p>I’m born in Brasil and raised in Côte d’Ivoire (for 15 years).</p>
        <p>
          I’m passionate about solving problems by design, I have the competence
          and enthusiasm to build from scratch products or solutions for any
          challenge (Chemical Industry, AgriTech, PR Tech and etc).
        </p>
        <p>
          Worked as Product Designer at Peugeot Citröen Automobiles – PSA (in
          France), Advisor in Product development and Go-To-Market. Strong
          experience in entrepreneurship and 9 years in product development.
        </p>
      </article>

      <section class="links">
        <a href="" :style="{ color: buttonColor }">@instagram</a>
        <a href="" :style="{ color: buttonColor }">@linkedin</a>
        <a href="" :style="{ color: buttonColor }">@gmail</a>
      </section>

      <img src="~/assets/images/arredi.png" alt="" />

      <section class="experience-and-education">
        <section>
          <h2>Education</h2>

          <h3>Université Panthéon Sorbonne - Paris I</h3>
          <p>2014 - 2015</p>
          <p>Uma linha do cursosfsdfsd</p>

          <h3>Université Panthéon Sorbonne - Paris I</h3>
          <p>2014 - 2015</p>
          <p>Uma linha do cursosfsdfsd</p>
        </section>

        <section>
          <h2>Experience</h2>

          <h3>Nome da firma</h3>
          <p>2014 - 2015</p>
          <p>Cargo</p>
          <div>——</div>
          <p>
            Descrição do trampo em linhas continuas, descrição do trampo em
            linhas continuas… teeter fgdfg d….
          </p>
        </section>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapState(['color', 'fontColor', 'buttonColor']),
  },

  created() {
    this.changeColor('#F2E7E7', '#313545', '#E66464')
  },

  methods: {
    ...mapMutations(['setColor', 'setFontColor', 'setButtonColor']),

    changeColor(
      backgroundColor: string,
      fontColor: string,
      buttonColor: string
    ) {
      this.setColor(backgroundColor)
      this.setFontColor(fontColor)
      this.setButtonColor(buttonColor)
    },
  },
})
</script>

<style>
.about-container h1 {
  cursor: pointer;
  width: fit-content;
}
@media (max-width: 720px) {
  .about-container {
    padding: 0 10px;
  }

  .experience-and-education {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      'education'
      'experience';
  }
}

@media (min-width: 720px) {
  .about-container {
    width: calc(100% - 9.09%);
  }

  .experience-and-education {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'education experience';
  }
}

.about-container {
  display: flex;
  flex-direction: column;
}

.about-container article {
  font-size: 1.563rem;
  font-weight: normal;
  text-align: left;
  margin: 1.25rem 0;
}

.links > a {
  font-size: 1.563rem;
  font-weight: normal;
  text-decoration: underline;
  margin-right: 1.188rem;
}

.about-container h1 {
  font-size: 5rem;
  font-weight: bold;
}

.about-container h2 {
  font-size: 3.125rem;
  font-weight: bold;
}

.about-container h3 {
  font-size: 1.563rem;
  font-weight: bold;
  margin-top: 2.5rem;
}

.about-container > div {
  display: flex;
  flex-direction: row;
  margin-top: 3.125rem;
  flex-flow: wrap;
}

.about-container > img {
  display: block;
  height: auto;
  width: 100%;
  margin: 1.75rem 0;
}
</style>
