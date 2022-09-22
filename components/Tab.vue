<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: 'Tab',
    },
  },
  data() {
    return {
      isActive: true,
    }
  },
  mounted() {
    this.$nuxt.$on('tab-clicked', (activeTabName: string) => {
      this.setActive(activeTabName)
    })
  },
  methods: {
    setActive(activeTabName: string) {
      this.isActive = this.title === activeTabName
    },
  },
})
</script>

<style scoped></style>
