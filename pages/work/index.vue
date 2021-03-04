<template>
	<div class="work-container">
		<p :style="{'color': fontColor}">i'm doing</p>
		<NuxtLink to="/work/knewin" tag="a" @mouseover.native="changeColor('#126FF4', '#FFFFFF')" :style="{'color': fontColor}">Knewin</NuxtLink>
		<NuxtLink to="/work/bmk-partners" tag="a" @mouseover.native="changeColor('#033756', '#FE9F6A')" :style="{'color': fontColor}">BMK Partners</NuxtLink>

		<p :style="{'color': fontColor}">i have done</p>
		<NuxtLink to="/work/101chefs-baobba" tag="a" @mouseover.native="changeColor('#560332', '#FFFFFF')" :style="{'color': fontColor}">101 Chefs /Baobba</NuxtLink>
		<NuxtLink to="/work/vivakey" tag="a" :style="{'color': fontColor}">Vivakey</NuxtLink>
		<NuxtLink to="/work/psa" tag="a" :style="{'color': fontColor}">PSA</NuxtLink>
		<NuxtLink to="/work/archives" tag="a" :style="{'color': fontColor}">Archives</NuxtLink>
	</div>	
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapState(['fontColor'])
  },

	methods: {
		...mapMutations(['setColor', 'setFontColor']),

		changeColor(backgroundColor: string, fontColor: string) {
			this.setColor(backgroundColor);
			this.setFontColor(fontColor);
		}
	}
})
</script>

<style>
section {
	justify-items: stretch !important;
}

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

.work-container > p:nth-child(4) {
	margin-top: 3rem;
}

.work-container > a {
	font-size: 5rem;
	font-weight: bold;
}
</style>