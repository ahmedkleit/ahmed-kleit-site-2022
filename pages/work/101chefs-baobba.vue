<template>
  <div class="chefs-wrapper" :style="{ color: fontColor }">
    <h1>101 Chefs</h1>
    <div class="chefs-container">
      <article>
        <h2>
          A Market place platform to connect cooks to neighbours looking for
          homemade food.
        </h2>
        <h2>Co-Creator | Product & Design</h2>

        <p>April 2016 | Dez 2017</p>

        <p>
          In 2015, Brazil start facing finance and political crisis, to
          brazilian, one of the first solution to make extra money, its to sell
          homemade cook every where, corner of the street, bus, train stations
          and deliveries.
        </p>

        <p>
          101 Chefs was born to empower this community and support them on the
          most difficult step of the business, recurring customers and revenues.
        </p>

        <section>
          <p>
            101 Chef was created by Baobbá, an « open business » company. One of
            the most amazing work experience.
          </p>

          <a href="">
            <svg
              class="heart-icon"
              style="width: 1.438rem; height: 1.25rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="#EF0000"
                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
              />
            </svg>
            Click to Know about Baobbá
          </a>
        </section>
      </article>
    </div>

    <div class="video">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        allowfullscreen
      ></iframe>
    </div>

    <div class="chips-container">
      <Chip>Entrepreneurship</Chip>
      <Chip>Strategy</Chip>
      <Chip>Go-To-Market</Chip>
      <Chip>Process management</Chip>
      <Chip>Open business</Chip>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapState(['color', 'fontColor']),
  },

  created() {
    this.changeColor('#560332', '#FFFFFF')
  },

  methods: {
    ...mapMutations(['setColor', 'setFontColor']),

    changeColor(backgroundColor: string, fontColor: string) {
      this.setColor(backgroundColor)
      this.setFontColor(fontColor)
    },
  },
})
</script>

<style scoped>
@media (max-width: 720px) {
  .chefs-container {
    padding: 0 10px;
  }

  .chefs-wrapper {
    display: grid;
    grid-template-areas:
      'title'
      'article'
      'chips'
      'video';
    gap: 1rem;
  }
}

@media (min-width: 720px) {
  .chefs-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'title title'
      'article video'
      'chips chips';
    gap: 1rem;
  }
}

.chefs-container {
  display: flex;
  flex-direction: column;
}

.chefs-wrapper > h1 {
  font-size: 5rem;
  font-weight: bold;
  grid-area: title;
}

.chefs-container > article {
  grid-area: article;
}

.chefs-container > article > h2 {
  font-size: 2.188rem;
  font-weight: bold;
  margin-bottom: 1.25rem;
}

.chefs-container > article > h2:nth-child(1) {
  margin-top: 1.25rem;
}

.chefs-container > article > h2:nth-child(2) {
  font-weight: normal;
  margin-top: 1.875rem;
}

.chefs-container > article > h3 {
  font-size: 1.563rem;
  font-weight: bold;
  margin-top: 2.5rem;
}

.chefs-container p {
  font-size: 1.563rem;
  font-weight: normal;
  margin: 15px 0;
}

.chefs-container > article > section {
  display: flex;
  flex-direction: column;
  border: 2px solid #b24181;
  border-radius: 5px;
  min-height: auto;
  text-align: center;
  padding: 1.375rem 0;
  width: 100%;
}

.chefs-container > article > section > p {
  font-weight: bold;
}

.chefs-container > article > section > a {
  font-size: 1.125rem;
  text-decoration: underline;
}

.heart-icon {
  vertical-align: bottom;
}

.video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  margin-top: 1.25rem;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.chefs-wrapper > .chips-container {
  display: flex;
  flex-direction: row;
  margin-top: 3.125rem;
  flex-flow: wrap;
  grid-area: chips;
}
</style>
