<template>
	<div :style="{'color': fontColor}">
		<div class="bmk-container">
			<h1>
				BMK Partners	
			</h1>
			<h2>
				BMK Partners is one of the most prominent, Go-To-Market strategy and Corporate Finance Boutique, for the middle market.
			</h2>
			<h2>
				Founded in 2015 in São Paulo, our firm operates under an partnership agreement, enabling us to mix the excitement from youths with the experience from seniors.
			</h2>
			<h2>
				Founder Partner | Advisor on Go-To-Market and Products strategy
			</h2>

			<p>
				April 2015 | Current
			</p>

			<p>
				The multidisciplinary skills and complementary vision of our partners creates an unique environment of creativeness required to develop sharp solutions to complex challenges, adding value to the ambitions of our customers and investors.
			</p>

			<h3>
				Key functions
			</h3>

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
		...mapState(['color', 'fontColor'])
	},

	created() {
		this.changeColor('#033756', '#FE9F6A');
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

<style scoped>
.bmk-container {
	display: flex;
	flex-direction: column;
}

.bmk-container > h1 {
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

.bmk-container> h3 {
	font-size: 1.563rem;
	font-weight: bold;
	margin-top: 2.5rem;
}

.bmk-container > p, li {
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