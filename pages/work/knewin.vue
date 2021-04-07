<template>
	<div>
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
				<li>> Owns vision, roadmap, pricing, licensing and ROI</li>
				<li>> Collaborates on enablers</li>
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

		<div class="wrapper">
			<section class="details">
				<h1>Product suites</h1>

				<div class="saas">
					<h2>SaaS</h2>
					<h3>Do it yourself</h3>
					<div class="product-container news">
						<img src="~/assets/images/logo-news.svg" alt="Knewin News Logo">
						<div>
							<p>
								Complete self-service tool for news monitoringand analysis. Assess the impact of PR actions.
							</p>
							<NuxtLink tag="a" to="/">more details</NuxtLink>
						</div>
					</div>

					<div  class="product-container social">
						<img src="~/assets/images/logo-social.svg" alt="Knewin Social Logo">
						<div>
							<p>
								Platform to monitor and manage mentions about brands, influencers on social networks.
							</p>
							<NuxtLink tag="a" to="/">more details</NuxtLink>
						</div>
					</div>
				</div>

				<div class="intelligence">
					<h2>Intelligence (services)</h2>
					<h3>Made with you</h3>
					<div class="product-container analytics">
						<img src="~/assets/images/logo-analytics.svg" alt="Knewin Analytics Logo">
						<div>
							<p>
								Interface for your company to monitor the information of all customers with easy integration.
							</p>
							<NuxtLink tag="a" to="/">more details</NuxtLink>
						</div>
					</div>
				</div>

				<div class="enterprise">
					<h2>Enterprise (services)</h2>
					<h3>We do it for you</h3>
					<div class="product-container product-enterprise">
						<img src="~/assets/images/logo-news.svg" alt="Knewin Enterprise Logo">
						<div>
							<p>
								Interface for your company to monitor the information of all customers with easy integration
							</p>
							<NuxtLink tag="a" to="/">more details</NuxtLink>
						</div>
					</div>

					<div  class="product-container monitoring">
						<img src="~/assets/images/logo-monitoring.svg" alt="Knewin Monitoring Logo">
						<div>
							<p>
								Service that merge Knewin technology with the customize delivery by specialized team.
							</p>
							<NuxtLink tag="a" to="/">more details</NuxtLink>
						</div>
					</div>
				</div>

				<div class="rd">
					<h2>R&D</h2>
					<h3> New product</h3>
					<div class="product-container colab">
						<img src="~/assets/images/logo-colab.svg" alt="Knewin Colab Logo">
						<div>
							<p>
								Service that merge Knewin technology with the customize delivery by specialized team.
							</p>
							<NuxtLink tag="a" to="/">more details</NuxtLink>
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

.wrapper {
	position: absolute;
	color: #1C4752;
	background: #FFFFFF;
	top: 98vh;
	left: 0;
	right: 0;
}

.details {
	max-width: 1656px;
	margin: 3.125rem auto;
	display: grid;
	justify-content: start;
	align-items: center;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: auto 1fr 1fr;
  gap: 1rem;
	grid-template-areas: 
		". title title title title title title title title title title title"
		". saas saas saas saas saas saas . intelligence intelligence intelligence ."
		". enterprise enterprise enterprise enterprise enterprise enterprise . rd rd rd .";
}

.details > h1 {
	font-size: 3.75rem;
	font-weight: bold;

	grid-area: title;
	width: 100%;

	padding-bottom: 2.5rem;
	border-bottom: #1C4752 3px solid;
	margin-bottom: 2.25rem;
}

.details h2 {
	font-size: 2.188rem;
	font-weight: bold;
	grid-area: suite-title;
}

.details h3 {
	font-size: 2.188rem;
	font-weight: normal;
	font-style: italic;
	grid-area: suite-subtitle;

	margin-bottom: 1.875rem;
}

.saas {
	grid-area: saas;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto 1fr;
	grid-column-gap: 1rem;
	grid-template-areas: 
		"suite-title suite-title"
		"suite-subtitle suite-subtitle"
		"news social";
}

.product-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	min-height: 19.313rem;
}

.product-container img {
	border-radius: 10px 10px 0 0;
	width: 100%;
	height: 6.188rem;
}

.product-container div {
	display: flex;
  flex-direction: column;

	background: #F5F5F5;
	border-radius: 0 0 10px 10px;
	width: 100%;
	min-height: 13.125rem;
	height: 100%;
	padding: 1.25rem;
	font-size: 1.563rem;
	color: #1C4752;
}

.product-container p {
	text-align: left;    
}

.product-container a {
	align-self: flex-end;
	border-bottom: #1C4752 1px solid;
	margin-top: 3.125rem;
}

.saas > .news {
	grid-area: news;
}

.news img {
	background: #F8AB82 0% 0% no-repeat padding-box;
	padding: 2.313rem 6.063rem;
}

.saas > .social {
	grid-area: social;
}

.social img {
	background: #1370F6 0% 0% no-repeat padding-box;
	padding: 2.313rem 5.75rem;
}

.intelligence {
	grid-area: intelligence;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto 1fr;
	grid-column-gap: 1rem;
	grid-template-areas: 
		"suite-title"
		"suite-subtitle"
		"analytics";
}

.intelligence > .analytics {
	grid-area: analytics;
}

.analytics img {
	background: #698A92 0% 0% no-repeat padding-box;
	padding: 2.313rem 4.313rem;
}

.enterprise {
	grid-area: enterprise;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto 1fr;
	grid-column-gap: 1rem;
	grid-template-areas: 
		"suite-title suite-title"
		"suite-subtitle suite-subtitle"
		"enterprise monitoring";
}

.enterprise > .product-enterprise {
	grid-area: enterprise;
}

.product-enterprise img {
	background: #293343 0% 0% no-repeat padding-box;
	padding: 2.313rem 3.688rem;
}

.enterprise > .monitoring {
	grid-area: monitoring;
}

.monitoring img {
	background: #5E92BC 0% 0% no-repeat padding-box;
	padding: 2.313rem 3.313rem;
}

.rd {
	grid-area: rd;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto 1fr;
	grid-column-gap: 1rem;
	grid-template-areas: 
		"suite-title"
		"suite-subtitle"
		"colab";
}

.rd > .colab {
	grid-area: colab;
}

.colab img {
	background: #5A5EA6 0% 0% no-repeat padding-box;
	padding: 2.313rem 5.938rem;
}

@media(min-width: 1024px) {
  .details {
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto 1fr 1fr;
		grid-template-areas: 
			". title title title title title title title title title title title"
			". saas saas saas saas saas saas . intelligence intelligence intelligence ."
			". enterprise enterprise enterprise enterprise enterprise enterprise . rd rd rd .";
	}

	section > div {
		margin-bottom: 10rem;
	}
}

@media(max-width: 1024px) {
  .details {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto repeat(4, 1fr);
		grid-template-areas: 
			"title title"
			"saas saas"
			"intelligence ."
			"enterprise enterprise"
			"rd .";
	}

	section > div {
		margin-bottom: 5rem;
	}
}
</style>