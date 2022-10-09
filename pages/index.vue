<template>
  <div class="home-container">
    <h1 :style="{ color: fontColor }">ahmedkleit</h1>
    <p :style="{ color: fontColor }">
      passionate about people, nature and beer
    </p>
    <div class="button-group">
      <NuxtLink to="/work" tag="button" :style="{ color: buttonColor }"
        >work</NuxtLink
      >
      <NuxtLink to="/about" tag="button" :style="{ color: buttonColor }"
        >about</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapState(['fontColor', 'buttonColor']),
  },

  mounted() {
    this.setColor('#2F2735')
    this.setFontColor('#FF6464')
    this.setButtonColor('#F7D8D9')
  },

  methods: {
    ...mapMutations(['setColor', 'setFontColor', 'setButtonColor']),
  },
})
</script>

<style>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.home-container > h1 {
  font-size: 3.75rem;
  font-weight: 800;
  margin-bottom: 30px;
}

.home-container > p {
  font-size: 2.1875rem;
  font-weight: 700;
  text-align: center;
  margin: 0 15px;
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
</style>
