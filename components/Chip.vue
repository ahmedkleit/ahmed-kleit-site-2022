<template>
  <div class="chip" :style="cssProps">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  props: {
    chipColor: {
      type: String,
      required: true,
      default: '255, 255, 255',
    },
    chipFontColor: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    ...mapState(['fontColor']),

    cssProps() {
      return {
        background: `rgba(${this.chipColor}, 0.25)`,
        color: this.chipFontColor ? this.chipFontColor : this.fontColor,
      }
    },
  },
})
</script>

<style scoped>
.chip {
  border-radius: 20px;
  margin: 0.625rem 1.25rem 0.625rem 0;
  padding: 0.063rem 0.625rem 0.25rem;
}
</style>
