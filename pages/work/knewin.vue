<template>
	<div class="knewin-container">
		<h1>
			Knewin	
		</h1>
		<h2>
			Knewin is a technology company whose purpose is to make information useful and accessible to its customers.
		</h2>
		<h2>
			Product Leader
		</h2>

		<p>
			October 2018 | Current
		</p>

		<h3>
			Growing with Knewin, since the first investment series A (2018) and B (2020).
		</h3>
		<p>
			The biggest challenge for a small product team in companies with global challenges is being sharp and accurate on strategic decisions. Agility and creativity are the key to unlock value.
		</p>

		<h3>
			Key functions
		</h3>

		<ul>
			<li>> Voice of the consumer and market Focused on long term vision</li>
			<li>> Translate business strategy into product strategy</li>
			<li>> Drive action throughout the organisation to get products to market</li>
			<li>> Owns vision, roadmap, pricing, licensing and ROI > Collaborates on enablers</li>
		</ul>
		
		<div>
			<Chip>Strategy</Chip>
			<Chip>Go-To-Market</Chip>
			<Chip>Management</Chip>
			<Chip>Comunication</Chip>
			<Chip>UX Design</Chip>
			<Chip>UI Design</Chip>
		</div>
	</div>	
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default Vue.extend({
	computed: {
		...mapState(['color', 'fontColor'])
	},

	created() {
		this.changeColor('#126FF4', '#FFFFFF');
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
.knewin-container {
	display: flex;
	flex-direction: column;
}

.knewin-container > h1 {
	font-size: 5rem;
	font-weight: bold;
}

.knewin-container > h2 {
	font-size: 2.188rem;
	font-weight: bold;
	margin-bottom: 1.25rem;
}

.knewin-container > h2:nth-child(2) {
	margin-top: 1.25rem;
}

.knewin-container > h2:nth-child(3) {
	font-weight: normal;
	margin-top: 1.875rem;
}

.knewin-container> h3 {
	font-size: 1.563rem;
	font-weight: bold;
	margin-top: 2.5rem;
}

.knewin-container > p, li {
	font-size: 1.563rem;
	font-weight: normal;
}

.knewin-container > ul {
	list-style-type: none;
}

.knewin-container > div {
	display: flex;
	flex-direction: row;
	margin-top: 3.125rem;
	flex-flow: wrap;
}
</style>