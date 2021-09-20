<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
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
      console.log(this.title, activeTabName)
      this.isActive = this.title === activeTabName
    },
  },
}
</script>

<style scoped></style>
