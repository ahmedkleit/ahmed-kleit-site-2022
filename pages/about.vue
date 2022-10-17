<template>
  <div :style="{ color: fontColor }">
    <div class="about-container">
      <h1>Hello, I’m Ahmed Kleit</h1>
      <h2>Based in São Paulo - Brasil | +55 11 971283696</h2>
      <article>
        <p>I’m born in Brasil and raised in Côte d’Ivoire (for 15 years).</p>
        <br />
        <p>
          I’m passionate about solving problems by design, I have the competence
          and enthusiasm to build from scratch products or solutions for any
          challenge (Chemical Industry, AgriTech, PR Tech and etc).
        </p>
        <br />
        <p>
          Worked as Product Designer at Peugeot Citröen Automobiles – PSA (in
          France), Advisor in Product development and Go-To-Market. Strong
          experience in entrepreneurship and 9 years in product development.
        </p>
      </article>

      <section class="links">
        <a
          href="https://www.linkedin.com/in/ahmedkleit/"
          target="_blank"
          :style="{ color: buttonColor }"
          >@linkedin</a
        >
        <a
          href="mailto:kleit.ahmed@gmail.com"
          target="_blank"
          :style="{ color: buttonColor }"
          >@gmail</a
        >
      </section>

      <img src="~/assets/images/ahmed.jpg" alt="" />

      <section class="experience-and-education">
        <section>
          <h2>Education</h2>

          <h3>University of Paris I Panthéon-Sorbonne</h3>
          <p>2013 - 2014 | Paris - France</p>
          <p>Master II Pro – Multimédia & Interactive Media Design</p>

          <h3>Centro Universitário Belas Artes de SP</h3>
          <p>2008 - 2011 | São Paulo - Brasil</p>
          <p>Brasil Bacharel, Graphic Design</p>

          <h2>Skills</h2>
          <div class="chips-container">
            <Chip :chip-color="'216, 165, 165'">Solver problem</Chip>
            <Chip :chip-color="'216, 165, 165'">Self-motivation</Chip>
            <Chip :chip-color="'216, 165, 165'">Team leadership</Chip>
            <Chip :chip-color="'216, 165, 165'">Sense of owner</Chip>
            <Chip :chip-color="'216, 165, 165'">Customer centric</Chip>
            <Chip :chip-color="'216, 165, 165'">Entrepreneur</Chip>
            <Chip :chip-color="'216, 165, 165'">Data driven</Chip>
            <Chip :chip-color="'216, 165, 165'">Go-to-Market Strategy</Chip>
            <Chip :chip-color="'216, 165, 165'">Product design</Chip>
            <Chip :chip-color="'216, 165, 165'">Business Development</Chip>
            <Chip :chip-color="'216, 165, 165'">User interface</Chip>
            <Chip :chip-color="'216, 165, 165'">User experience</Chip>
            <Chip :chip-color="'216, 165, 165'">Product Strategy</Chip>
          </div>
        </section>

        <section>
          <h2>Experience</h2>

          <h3>Agrivalle Brasil</h3>
          <p>Apr 2021 – Present (1 yr 4 mos) | Indaiatuba – Brasil</p>
          <p>Specialist Digital Innovation & Business Dev.</p>
          <!-- <div>——</div>
          <p>
            Descrição do trampo em linhas continuas, descrição do trampo em
            linhas continuas… teeter fgdfg d….
          </p> -->

          <h3>MMK Partners (Agria Partners)</h3>
          <p>Apr 2015 – Sep 2018 | São Paulo – Brasil</p>
          <p>Founder and Product Specialist</p>

          <h3>Knewin</h3>
          <p>Jan 2020 – Mar 2021 | São Paulo & Florianópolis – Brasil</p>
          <p>Product leader (B2B and SaaS) – last position</p>

          <h3>Knewin</h3>
          <p>Oct 2018 – Dez 2019 | São Paulo & Florianópolis – Brasil</p>
          <p>Product Manager SaaS</p>

          <h3>101 Chefs (Startup from Baobbá)</h3>
          <p>Apr 2016 – Sep 2017 | São Paulo – Brasil</p>
          <p>Co-Creator and Product Leader – last position</p>

          <h3>Baobbá</h3>
          <p>May 2015 – Apr 2016 | São Paulo – Brasil</p>
          <p>Co-Creator and Product Leader</p>

          <h3>Groupe PSA (Stelantis)</h3>
          <p>Apr 2014 – Dec 2014 | Paris – France</p>
          <p>UX/UI Designer</p>

          <h3>BossaNovaFilms</h3>
          <p>Mar 2013 – Jul 2013 | São Paulo – Brasil</p>
          <p>Graphic Designer</p>

          <h3>Meio&Mensagem</h3>
          <p>Mar 2011 – Feb 2013 | São Paulo – Brasil</p>
          <p>Graphic Designer</p>

          <h3>Campus France Brasil</h3>
          <p>Dec 2007 – Sep 2009 | São Paulo – Brasil</p>
          <p>Intern</p>
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

  .about-container h2 {
    font-size: 1.563rem !important;
  }

  .experience-and-education {
    display: grid;
    grid-template-rows: auto 1fr;
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
  font-size: 1.563rem;
  font-weight: bold;
  margin-top: 2.5rem;
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

.about-container .chips-container {
  display: flex;
  flex-direction: row;
  margin-top: unset;
  flex-flow: wrap;
  grid-area: chips;
}
</style>
