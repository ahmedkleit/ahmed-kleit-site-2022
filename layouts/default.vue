<template>
  <div :style="{ 'background': color, 'color': fontColor === '#1C4752' ? fontColor : '#FFFFFF' }">
    <div class="container">
      <header>
        <NuxtLink to="/resume" :style="{'color': fontColor === '#1C4752' ? fontColor : '#FFFFFF', 'border-bottom': `1px solid ${fontColor === '#1C4752' ? fontColor : '#FFFFFF'}`}">resume</NuxtLink>
        <NuxtLink to="/personal" :style="{'color': fontColor === '#1C4752' ? fontColor : '#FFFFFF', 'border-bottom': `1px solid ${fontColor === '#1C4752' ? fontColor : '#FFFFFF'}`}">personal</NuxtLink>
      </header>

      <section>
        <nav>
          <NuxtLink to="/" tag="button" :style="{'color': fontColor === '#1C4752' ? fontColor : '#FFFFFF'}">home</NuxtLink>
          <NuxtLink to="/work" tag="button" :style="{'color': fontColor === '#1C4752' ? fontColor : '#FFFFFF'}">work</NuxtLink>
          <NuxtLink to="/about" tag="button" :style="{'color': fontColor === '#1C4752' ? fontColor : '#FFFFFF'}">about</NuxtLink>
        </nav>
        
        <main>
          <Nuxt class="content"/>
        </main>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapState} from 'vuex'
export default Vue.extend({
  computed: {
    ...mapState(['color', 'fontColor'])
  }
})
</script>

<style>
.container {
  max-width: 1656px;
  height: 100vh;
	margin: 0 auto;

  display: flex;
	flex-direction: column;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 1.8125rem 0;
}

header > a {
  font-size: 1.5625rem;
  color: #1C4752;
}

header > a:last-child {
  margin-left: 2.5rem;
}

@media(min-width: 720px) {
	section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 100%;
    height: 100%;
    gap: 1rem;
    align-content: center;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 3.75rem;
  }

  nav > button {
    margin: 1.75rem;
    width: 5.125rem;
    height: 2.5rem;
    font-size: 1.5625rem;
    transform: matrix(1, 0, 0, 1, 0, 0) rotate(-90deg) translateX(-50%);;
  }

  main {
    grid-column: 2 / 12;
  }
}

@media(max-width: 720px) {
  header > a:last-child {
    margin-right: 10px;
  }

	section {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
    height: 100%;
    gap: 1rem;
    align-content: center;
    justify-items: center;
  }

  nav {
    grid-row: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  nav > button {
    margin: 1.75rem;
    width: 5.125rem;
    height: 2.5rem;
    font-size: 1.5625rem;
  }

  main {
    grid-row: 1;
  }
}
</style>
