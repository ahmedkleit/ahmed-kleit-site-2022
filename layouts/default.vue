<template>
  <div
    class="background"
    :style="{
      background: color,
      color: fontColor,
    }"
  >
    <div class="container">
      <header>
        <a
          href="/Resume Ahmed Kleit 2022.pdf"
          target="_blank"
          :style="{
            color: buttonColor,
            'border-bottom': `1px solid ${buttonColor}`,
          }"
          >resume</a
        >
        <a
          href="https://www.instagram.com/ahmedkleit/"
          target="_blank"
          :style="{
            color: buttonColor,
            'border-bottom': `1px solid ${buttonColor}`,
          }"
          >instagram</a
        >
      </header>

      <section>
        <nav :style="{ backgroundColor: color }">
          <NuxtLink to="/" tag="button" :style="{ color: buttonColor }">
            <p>home</p>
          </NuxtLink>
          <NuxtLink to="/work" tag="button" :style="{ color: buttonColor }">
            <p>work</p>
          </NuxtLink>
          <NuxtLink to="/about" tag="button" :style="{ color: buttonColor }">
            <p>about</p>
          </NuxtLink>
        </nav>

        <main>
          <Nuxt class="content" />
        </main>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapState(['color', 'fontColor', 'buttonColor']),
  },
})
</script>

<style>
.background {
  transition: 0.2s;
  transition-timing-function: ease-out;
  padding: 0 1rem;
}

.container {
  max-width: 1640px;
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
  color: #1c4752;
  z-index: 100;
}

header > a:last-child {
  margin-left: 2.5rem;
}

.container > section {
  min-height: 88vh;
}

nav {
  z-index: 2;
}

@media (min-width: 720px) {
  .container {
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'header'
      'section';
  }

  .container > section {
    grid-area: section;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 100%;
    gap: 1rem;
    align-content: center;
    justify-items: stretch;
  }

  main {
    grid-column: 2 / 13;
  }

  nav {
    position: fixed;
    bottom: 1%;
    grid-column: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* padding-bottom: 3.75rem; */
    border-radius: 10px;
    padding: 1rem;
  }

  nav > button {
    margin: 1.25rem 0;
    height: 5.125rem;
    width: 2.5rem;
    font-size: 1.5625rem;
    /* transform: matrix(1, 0, 0, 1, 0, 0) rotate(-90deg) translateX(-50%)
      translatey(-50%); */
  }

  nav > button > p {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
}

@media (max-width: 1440px) {
  header {
    margin: 1rem 0;
  }
}

@media (max-width: 720px) {
  .container {
    height: 100vh;
    min-height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      'header'
      'section';
  }

  .container > section {
    grid-area: section;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'main'
      'footer';
    align-content: center;
    justify-items: center;
  }

  header {
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
    position: static;
    margin: 0 auto;
    bottom: 0;
    left: 0;
    right: 0;
  }

  nav > button {
    margin: 1.75rem;
    width: 5.125rem;
    height: 2.5rem;
    font-size: 1.5625rem;
  }
}
</style>
