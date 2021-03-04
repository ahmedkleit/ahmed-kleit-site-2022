<template>
  <div class="chip" :style="{'color': fontColor}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
   computed: {
    ...mapState(['fontColor'])
  }
})
</script>

<style>
.chip {
  background: rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  margin: 0 0.625rem;
  padding: 0.063rem 0.625rem 0.25rem;
}
</style>
