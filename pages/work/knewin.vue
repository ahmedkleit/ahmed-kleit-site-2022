<template>
  <div>
    <div class="knewin-container">
      <article>
        <a href="https://www.knewin.com/" target="_blank">
          Knewin
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
            />
          </svg>
        </a>
        <h2>
          Knewin is a technology company whose purpose is to make information
          useful and accessible to its customers.
        </h2>
        <h2>Product Leader</h2>

        <p>October 2018 | Current</p>

        <h3>
          Growing with Knewin, since the first investment series A (2018) and B
          (2020).
        </h3>
        <p>
          The biggest challenge for a small product team in companies with
          global challenges is being sharp and accurate on strategic decisions.
          Agility and creativity are the key to unlock value.
        </p>

        <h3>Key functions</h3>

        <ul>
          <li>
            > Voice of the consumer and market Focused on long term vision
          </li>
          <li>> Translate business strategy into product strategy</li>
          <li>
            > Drive action throughout the organisation to get products to market
          </li>
          <li>> Owns vision, roadmap, pricing, licensing and ROI</li>
          <li>> Collaborates on enablers</li>
        </ul>

        <div>
          <Chip :chip-color="'255, 255, 255'">Strategy</Chip>
          <Chip :chip-color="'255, 255, 255'">Go-To-Market</Chip>
          <Chip :chip-color="'255, 255, 255'">Management</Chip>
          <Chip :chip-color="'255, 255, 255'">Comunication</Chip>
          <Chip :chip-color="'255, 255, 255'">UX Design</Chip>
          <Chip :chip-color="'255, 255, 255'">UI Design</Chip>
        </div>
      </article>

      <svg class="arrow-down" viewBox="0 0 24 24">
        <path
          fill="#FFF"
          d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
        />
      </svg>
    </div>
    <div class="wrapper">
      <section class="details">
        <h1>Product suites</h1>

        <h2 class="saas-title">SaaS</h2>
        <h3 class="saas-subtitle">Do it yourself</h3>
        <div class="saas">
          <div class="product-container news">
            <div>
              <img src="~/assets/images/logo-news.svg" alt="Knewin News Logo" />
            </div>
            <div>
              <p>
                Complete self-service tool for news monitoringand analysis.
                Assess the impact of PR actions.
              </p>
              <a
                href="https://www.knewin.com/produto/knewin-news/"
                target="_blank"
                >more details</a
              >
            </div>
          </div>

          <div class="product-container social">
            <div>
              <img
                src="~/assets/images/logo-social.svg"
                alt="Knewin Social Logo"
              />
            </div>
            <div>
              <p>
                Platform to monitor and manage mentions about brands,
                influencers on social networks.
              </p>
              <a
                href="https://www.knewin.com/produto/knewin-social/"
                target="_blank"
                >more details</a
              >
            </div>
          </div>
        </div>

        <h2 class="intelligence-title">Intelligence (services)</h2>
        <h3 class="intelligence-subtitle">Made with you</h3>
        <div class="intelligence">
          <div class="product-container analytics">
            <div>
              <img
                src="~/assets/images/logo-analytics.svg"
                alt="Knewin Analytics Logo"
              />
            </div>
            <div>
              <p>
                Interface for your company to monitor the information of all
                customers with easy integration.
              </p>
              <a
                href="https://www.knewin.com/produto/knewin-analytics/"
                target="_blank"
                >more details</a
              >
            </div>
          </div>
        </div>

        <h2 class="enterprise-title">Enterprise (services)</h2>
        <h3 class="enterprise-subtitle">We do it for you</h3>
        <div class="enterprise">
          <div class="product-container product-enterprise">
            <div>
              <img
                src="~/assets/images/logo_enterprise.png"
                alt="Knewin Enterprise Logo"
              />
            </div>
            <div>
              <p>
                Interface for your company to monitor the information of all
                customers with easy integration
              </p>
              <a
                href="https://www.knewin.com/solucao/apis-enterprise-premium/"
                target="_blank"
                >more details</a
              >
            </div>
          </div>

          <div class="product-container monitoring">
            <div>
              <img
                src="~/assets/images/logo-monitoring.svg"
                alt="Knewin Monitoring Logo"
              />
            </div>
            <div>
              <p>
                Service that merge Knewin technology with the customize delivery
                by specialized team.
              </p>
              <a
                href="https://www.knewin.com/produto/knewin-monitoring/"
                target="_blank"
                >more details</a
              >
            </div>
          </div>
        </div>

        <h2 class="rd-title">R&D</h2>
        <h3 class="rd-subtitle">New product</h3>
        <div class="rd">
          <div class="product-container colab">
            <div>
              <img
                src="~/assets/images/logo-colab.svg"
                alt="Knewin Colab Logo"
              />
            </div>
            <div>
              <p>
                Service that merge Knewin technology with the customize delivery
                by specialized team.
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default Vue.extend({
  head() {
    return {
      title: 'Ahmed Kleit - Knewin',
    }
  },

  computed: {
    ...mapState(['color', 'fontColor']),
  },

  created() {
    this.changeColor('#126FF4', '#FFFFFF', '#FFFFFF')
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
@media (max-width: 720px) {
  .knewin-container {
    padding: 0 10px;
    min-height: calc(100vh - 6.8125rem) !important;
  }

  .wrapper .details {
    padding: 0 10px;
  }

  .arrow-down {
    position: sticky !important;
    bottom: 5rem !important;
  }
}

.knewin-container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-around;
}

.knewin-container > article {
  display: flex;
  flex-direction: column;
}

.knewin-container > article > a {
  width: fit-content;
  font-size: 5rem;
  font-weight: bold;
}

.knewin-container > article > h2 {
  font-size: 2.188rem;
  font-weight: bold;
  margin-bottom: 1.25rem;
}

.knewin-container > article > h2:nth-child(2) {
  margin-top: 1.25rem;
}

.knewin-container > article > h2:nth-child(3) {
  font-weight: normal;
  margin-top: 1.875rem;
}

.knewin-container > article > h3 {
  font-size: 1.563rem;
  font-weight: bold;
  margin-top: 2.5rem;
}

.knewin-container > article > p,
li {
  font-size: 1.563rem;
  font-weight: normal;
}

.knewin-container > article > ul {
  list-style-type: none;
}

.knewin-container > article > div {
  display: flex;
  flex-direction: row;
  margin-top: 3.125rem;
  flex-flow: wrap;
}

.wrapper {
  position: absolute;
  color: #1c4752;
  background: #ffffff;
  top: 100vh;
  left: 0;
  right: 0;
}

.details {
  max-width: 1656px;
  margin: 0 auto;
  display: grid;
  justify-content: start;
  align-items: start;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto repeat(2, auto auto 1fr);
  gap: 1rem;
  grid-template-areas:
    '. title title title title title title title title title title title'
    '. saas-title saas-title saas-title saas-title saas-title saas-title . intelligence-title intelligence-title intelligence-title .'
    '. saas-subtitle saas-subtitle saas-subtitle saas-subtitle saas-subtitle saas-subtitle . intelligence-subtitle intelligence-subtitle intelligence-subtitle .'
    '. saas saas saas saas saas saas . intelligence intelligence intelligence .'
    '. enterprise-title enterprise-title enterprise-title enterprise-title enterprise-title enterprise-title . rd-title rd-title rd-title .'
    '. enterprise-subtitle enterprise-subtitle enterprise-subtitle enterprise-subtitle enterprise-subtitle enterprise-subtitle . rd-subtitle rd-subtitle rd-subtitle .'
    '. enterprise enterprise enterprise enterprise enterprise enterprise . rd rd rd .';
}

.details > h1 {
  font-size: 3.75rem;
  font-weight: bold;

  grid-area: title;
  width: 100%;

  padding-bottom: 2.5rem;
  border-bottom: #1c4752 3px solid;
  margin-bottom: 2.25rem;
  margin-top: 3.125rem;
}

.details h2 {
  font-size: 2.188rem;
  font-weight: bold;
  margin-bottom: -1.5rem;
}

.details h3 {
  font-size: 2.188rem;
  font-weight: normal;
  font-style: italic;
}

.saas {
  grid-area: saas;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-column-gap: 1rem;
  grid-template-areas: 'news social';
}

.saas-title {
  grid-area: saas-title;
}

.saas-subtitle {
  grid-area: saas-subtitle;
}

.product-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 19.313rem;
  justify-content: space-between;
}

.product-container img {
  height: 1.563rem;
}

.product-container div:first-child {
  height: 6.188rem;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.product-container div:last-child {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #f5f5f5;
  border-radius: 0 0 10px 10px;
  width: 100%;
  height: 100%;
  padding: 1.25rem;
  font-size: 1.563rem;
  color: #1c4752;
}

.product-container p {
  text-align: left;
}

.product-container a {
  align-self: flex-end;
  border-bottom: #1c4752 1px solid;
}

.saas > .news {
  grid-area: news;
}

.news div:first-child {
  background: #f8ab82 0% 0% no-repeat padding-box;
}

.saas > .social {
  grid-area: social;
}

.social div:first-child {
  background: #1370f6 0% 0% no-repeat padding-box;
}

.intelligence {
  grid-area: intelligence;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  grid-column-gap: 1rem;
  grid-template-areas: 'analytics';
}

.intelligence-title {
  grid-area: intelligence-title;
}

.intelligence-subtitle {
  grid-area: intelligence-subtitle;
}

.intelligence > .analytics {
  grid-area: analytics;
}

.analytics div:first-child {
  background: #698a92 0% 0% no-repeat padding-box;
}

.enterprise {
  grid-area: enterprise;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-column-gap: 1rem;
  grid-template-areas: 'enterprise monitoring';
}

.enterprise-title {
  grid-area: enterprise-title;
}

.enterprise-subtitle {
  grid-area: enterprise-subtitle;
}

.enterprise > .product-enterprise {
  grid-area: enterprise;
}

.product-enterprise div:first-child {
  background: #293343 0% 0% no-repeat padding-box;
}

.enterprise > .monitoring {
  grid-area: monitoring;
}

.monitoring div:first-child {
  background: #5e92bc 0% 0% no-repeat padding-box;
}

.rd {
  grid-area: rd;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  grid-column-gap: 1rem;
  grid-template-areas: 'colab';
}

.rd-title {
  grid-area: rd-title;
}

.rd-subtitle {
  grid-area: rd-subtitle;
}

.rd > .colab {
  grid-area: colab;
}

.colab div:first-child {
  background: #5a5ea6 0% 0% no-repeat padding-box;
}

.arrow-down {
  position: absolute;
  width: 60px;
  height: 60px;
  align-self: center;
  bottom: 0px;
  z-index: 3;
}

@media (min-width: 1024px) {
  /* .details {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto 1fr 1fr;
    grid-template-areas:
      '. title title title title title title title title title title title'
      '. saas saas saas saas saas saas . intelligence intelligence intelligence .'
      '. enterprise enterprise enterprise enterprise enterprise enterprise . rd rd rd .';
  } */

  section > div {
    margin-bottom: 10rem;
  }
}

@media (max-width: 720px) {
  .details {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto repeat(4, auto auto 1fr);
    grid-template-areas:
      'title title'
      'saas-title saas-title'
      'saas-subtitle saas-subtitle'
      'saas saas'
      'intelligence-title intelligence-title'
      'intelligence-subtitle intelligence-subtitle'
      'intelligence .'
      'enterprise-title enterprise-title'
      'enterprise-subtitle enterprise-subtitle'
      'enterprise enterprise'
      'rd-title rd-title'
      'rd-subtitle rd-subtitle'
      'rd .';
  }

  .wrapper section > div {
    margin-bottom: 5rem;
  }

  .wrapper {
    position: inherit;
    width: 100vw;
  }
}

@media (min-width: 720px) {
  .knewin-container {
    width: calc(100% - 9.09%);
  }
}

@media (min-height: 1366px) {
  .knewin-container {
    min-height: calc(100vh - 2.5625rem);
  }
}

.details div {
  align-items: stretch;
}
</style>
