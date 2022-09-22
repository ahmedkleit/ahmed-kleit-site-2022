<template>
  <div class="work-container">
    <p :style="{ color: fontColor }">i'm doing</p>
    <NuxtLink
      to="/agrivalle"
      tag="a"
      :style="{ color: buttonColor }"
      @mouseover.native="changeColor('#2F2735', '#FF6464', '#F7D8D9')"
      >Agrivalle</NuxtLink
    >

    <p :style="{ color: fontColor }">i have done</p>
    <NuxtLink
      to="/work/knewin"
      tag="a"
      :style="{ color: buttonColor }"
      @mouseover.native="changeColor('#126FF4', '#FFFFFF', '#FFFFFF')"
      >Knewin</NuxtLink
    >
    <NuxtLink
      to="/work/bmk-partners"
      tag="a"
      :style="{ color: buttonColor }"
      @mouseover.native="changeColor('#033756', '#FE9F6A', '#FFFFFF')"
      >BMK Partners</NuxtLink
    >
    <NuxtLink
      to="/work/101chefs-baobba"
      tag="a"
      :style="{ color: buttonColor }"
      @mouseover.native="changeColor('#560332', '#FFFFFF', '#FFFFFF')"
      >101 Chefs /Baobba</NuxtLink
    >
    <NuxtLink
      to="/work/vivakey"
      tag="a"
      :style="{ color: buttonColor }"
      @mouseover.native="changeColor('#9BCFE2', '#163651', '#FFFFFF')"
      >Vivakey</NuxtLink
    >
    <NuxtLink
      to="/work/psa"
      tag="a"
      :style="{ color: buttonColor }"
      @mouseover.native="changeColor('#1E2337', '#FD4239', '#FFFFFF')"
      >PSA</NuxtLink
    >
    <!-- <NuxtLink to="/work/archives" tag="a" :style="{ color: fontColor }"
      >Archives</NuxtLink
    > -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapState(['fontColor', 'buttonColor']),
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
.work-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
}

@media (min-width: 1080px) {
  .work-container {
    padding-left: 9rem;
  }
}

.work-container > p {
  font-size: 1.563rem;
}

.work-container > p:nth-child(3) {
  margin-top: 3rem;
}

.work-container > a {
  font-size: 4rem;
  font-weight: bold;
  margin: 10px 0;
}
</style>
