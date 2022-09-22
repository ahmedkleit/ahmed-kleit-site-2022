<template>
  <div :style="{ color: fontColor }">
    <div class="bmk-container">
      <a href="https://www.mmk.partners/" target="_blank"
        >BMK Partners
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
          /></svg
      ></a>
      <h2>
        BMK Partners is one of the most prominent, Go-To-Market strategy and
        Corporate Finance Boutique, for the middle market.
      </h2>
      <h2>
        Founded in 2015 in São Paulo, our firm operates under an partnership
        agreement, enabling us to mix the excitement from youths with the
        experience from seniors.
      </h2>
      <h2>Founder Partner | Advisor on Go-To-Market and Products strategy</h2>

      <p>April 2015 | Current</p>

      <p>
        The multidisciplinary skills and complementary vision of our partners
        creates an unique environment of creativeness required to develop sharp
        solutions to complex challenges, adding value to the ambitions of our
        customers and investors.
      </p>

      <h3>Key functions</h3>

      <ul>
        <li>> Go-To-Market Strategy</li>
        <li>> Pricing</li>
        <li>> Market analysis / assessment</li>
        <li>> Interim management</li>
        <li>> Product and design advisor</li>
        <li>> Process management</li>
      </ul>

      <div>
        <Chip>Entrepreneurship</Chip>
        <Chip>Strategy</Chip>
        <Chip>Go-To-Market</Chip>
        <Chip>Process management</Chip>
      </div>
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
    this.changeColor('#033756', '#FE9F6A', '#FFFFFF')
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

<style scoped>
@media (max-width: 720px) {
  .bmk-container {
    padding: 0 10px;
  }
}

@media (min-width: 720px) {
  .bmk-container {
    width: calc(100% - 9.09%);
  }
}

.bmk-container {
  display: flex;
  flex-direction: column;
}

.bmk-container > a {
  width: fit-content;
  font-size: 5rem;
  font-weight: bold;
}

.bmk-container > h2 {
  font-size: 2.188rem;
  font-weight: bold;
  margin-bottom: 1.25rem;
}

.bmk-container > h2:nth-child(2) {
  margin-top: 1.25rem;
}

.bmk-container > h2:nth-child(4) {
  font-weight: normal;
  margin-top: 1.875rem;
}

.bmk-container > h3 {
  font-size: 1.563rem;
  font-weight: bold;
  margin-top: 2.5rem;
}

.bmk-container > p,
li {
  font-size: 1.563rem;
  font-weight: normal;
}

.bmk-container > ul {
  list-style-type: none;
}

.bmk-container > div {
  display: flex;
  flex-direction: row;
  margin-top: 3.125rem;
  flex-flow: wrap;
}
</style>
