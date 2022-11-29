<template>
  <div class="vivakey-wrapper" :style="{ color: fontColor }">
    <a href="https://vivakey.com.br/" target="_blank"
      >Vivakey
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
        />
      </svg>
    </a>
    <div class="vivakey-container">
      <article>
        <h2>
          Vivakey is a complete solution for digital hotels with all the
          necessary tools for the operation and management of an autonomous
          hotel.
        </h2>
        <h2>UX / UI Designer</h2>

        <p>November 2018</p>

        <p>
          I had the pleasure to receive an invitation from Felipe Pirotta (CTO),
          to develop the entire user experience within a mobile app.
        </p>

        <p>
          It was a great challenge to bring the entire experience of a guest at
          the hotel, using only their mobile.
        </p>

        <p>
          It was essential to support the user from their first access to the
          platform. Seeking a unique and liberating experience.
          <strong
            >From unlocking the parking to self check-out, 100%
            autonomous.</strong
          >
        </p>

        <p>
          <strong>Check it out</strong>
          <br />
          <strong>
            <a
              href="https://apps.apple.com/br/app/vivakey/id1461678729"
              target="_blank"
            >
              Apple Store
            </a>
            |
            <a
              href="https://play.google.com/store/apps/details?id=vivakey.vivakey.com.vivakey&hl=en&gl=US"
              target="_blank"
            >
              Play Store
            </a>
          </strong>
        </p>
      </article>

      <div class="chips-container">
        <Chip :chip-color="'255, 255, 255'">Automotive</Chip>
        <Chip :chip-color="'255, 255, 255'">UX Design</Chip>
        <Chip :chip-color="'255, 255, 255'">iOT</Chip>
        <Chip :chip-color="'255, 255, 255'">Mobile App</Chip>
        <Chip :chip-color="'255, 255, 255'">Open business</Chip>
      </div>
    </div>

    <div class="wrapper-carousel">
      <splide
        :options="splideOptions"
        class="carousel"
        @splide:active="showSubtitle"
      >
        <splide-slide>
          <img class="vivakey-img" src="~/assets/images/vivakey-img0.png" />
        </splide-slide>
        <splide-slide>
          <img class="vivakey-img" src="~/assets/images/vivakey-img1.png" />
        </splide-slide>
        <splide-slide>
          <img class="vivakey-img" src="~/assets/images/vivakey-img2.png" />
        </splide-slide>
        <splide-slide>
          <img class="vivakey-img" src="~/assets/images/vivakey-img3.png" />
        </splide-slide>
        <splide-slide>
          <img class="vivakey-img" src="~/assets/images/vivakey-img4.png" />
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default Vue.extend({
  data() {
    return {
      carouselIndex: null,
      splideOptions: {
        type: 'loop',
        padding: {
          right: '5rem',
          left: '5rem',
        },
        drag: 'free',
        snap: 'true',
        gap: '1rem',
        height: '45.5rem',
        width: '90%',
        autoWidth: true,
        focus: 'center',
        classes: {
          arrow: 'splide__arrow carousel-arrows',
          prev: 'splide__arrow--prev carousel-previous-arrow',
          next: 'splide__arrow--next carousel-next-arrow',
          pagination: 'splide__pagination carousel-pagination',
          page: 'splide__pagination__page your-class-page',
        },
      },
    }
  },

  head() {
    return {
      title: 'Ahmed Kleit - Vivakey',
    }
  },

  computed: {
    ...mapState(['color', 'fontColor']),
  },

  created() {
    this.changeColor('#9BCFE2', '#163651', '#FFFFFF')
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

    showSubtitle(splide: any) {
      this.carouselIndex = splide.index
    },
  },
})
</script>

<style>
@media (max-width: 720px) {
  .vivakey-container {
    padding: 0 10px;
  }

  .vivakey-wrapper {
    display: grid;
    grid-template-areas:
      'title'
      'article'
      'media';
    gap: 1rem;
  }
}

@media (min-width: 720px) {
  .vivakey-wrapper {
    display: grid;
    grid-template-columns: 1fr fit-content(50%);
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'title title'
      'article media';
    gap: 1rem;
  }
}

.vivakey-container {
  display: flex;
  flex-direction: column;
}

.vivakey-wrapper > a {
  width: fit-content;
  font-size: 5rem;
  font-weight: bold;
  grid-area: title;
}

.vivakey-container > article {
  grid-area: article;
}

.vivakey-container > article > h2 {
  font-size: 2.188rem;
  font-weight: bold;
  margin-bottom: 1.25rem;
}

.vivakey-container > article > h2:nth-child(1) {
  margin-top: 1.25rem;
}

.vivakey-container > article > h2:nth-child(2) {
  font-weight: normal;
  margin-top: 1.875rem;
}

.vivakey-container > article > h3 {
  font-size: 1.563rem;
  font-weight: bold;
  margin-top: 2.5rem;
}

.vivakey-container p {
  font-size: 1.563rem;
  font-weight: normal;
  margin: 15px 0;
}

.vivakey-container p:nth-child(4) {
  margin-top: 40px;
}

.vivakey-container p:last-child > strong:first-child {
  font-size: 1.125rem;
}

.vivakey-container p > strong > a {
  border-bottom: 1px solid #163651;
}

.carousel {
  place-self: center;
  max-width: 100%;
}

.wrapper-carousel {
  grid-area: media;
  overflow: hidden;
  text-align: -webkit-center;
  text-align: -moz-center;
  max-width: 100%;
  padding-bottom: 2rem;
}

.chips-container {
  display: flex;
  flex-direction: row;
  margin-top: 3.125rem;
  flex-flow: wrap;
  grid-area: chips;
}

.vivakey-img {
  height: inherit !important;
  /* object-fit: contain; */
}
</style>
