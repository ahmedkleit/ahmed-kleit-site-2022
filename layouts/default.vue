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
  min-height: 100vh;
	margin: 0 auto;

  display: grid;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 1.8125rem 0;
  grid-area: header;
}

header > a {
  font-size: 1.5625rem;
  color: #1C4752;
}

header > a:last-child {
  margin-left: 2.5rem;
}

section {
  min-height: 88vh;
}

@media(min-width: 720px) {
  .container {
    grid-template-rows: auto 1fr;
    grid-template-areas: 
    'header'
    'section';
  }

  section {
    grid-area: section;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 100%;
    gap: 1rem;
    align-content: center;
    justify-items: stretch;
  }

  main {
    grid-column: 2 / 12;
  }

  nav {
    grid-column: 1;
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
}

@media (max-width: 1440px) {
  header, section {
    padding: 0 10px;
  }

  header {
    margin: 1rem 0;
  }
}

@media(max-width: 720px) {
  .container {
    height: 100vh;
    min-height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
    'header'
    'section';
  }

  section {
    grid-area: section;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-areas: 
    'main'
    'footer';
    align-content: center;
    justify-items: center;
  }

  header, main {
    padding: 0 10px;
  }
    
  main {
    grid-area: main;
    overflow: auto;
  }

  nav {
    grid-area: footer;
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
}
</style>
