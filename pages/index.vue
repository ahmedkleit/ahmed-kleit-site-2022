<template>
  <div class="home-container">
      <h1>ahmed<strong>kleit</strong></h1>
      <p>passionate about people, nature and beer</p>
      <div class="button-group">
        <NuxtLink to="/work" tag="button" :style="{'color': fontColor}">work</NuxtLink>
        <NuxtLink to="/about" tag="button" :style="{'color': fontColor}">about</NuxtLink>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapState(['fontColor'])
  },

  mounted() {
    this.setColor('#BCF3EA');
    this.setFontColor('#1C4752');
  },

  methods: {
		...mapMutations(['setColor', 'setFontColor']),
  }
})
</script>

<style>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 12.125rem;
}

.home-container > h1 {
  font-size: 3.75rem;
  font-weight: 400;
  margin-bottom: 30px;
}

.home-container > p {
  font-size: 2.1875rem;
  text-align: center;
}

.button-group {
  margin-top: 3.75rem;
}

.button-group > button {
  font-size: 3.75rem;
  font-weight: bold;
  width: 12.25rem;
  height: 5.75rem;
  margin: 0 1.875rem;
}

@media (min-width: 720px) {
.home-container {
  width: calc(100% - 9.09%);
}
}
</style>
