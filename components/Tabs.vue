<template>
  <div>
    <ul class="tabs-header">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="selectTab(tab.title, index)"
      >
        {{ tab.title }}
        <div
          :style="{
            backgroundColor: fontColor,
            opacity: index == selectedIndex ? 1 : 0.42,
          }"
        ></div>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

interface Tab extends Vue {
  title?: string
}

export default Vue.extend({
  data() {
    return {
      selectedIndex: 0,
      // eslint-disable-next-line no-array-constructor
      tabs: new Array<Tab>(),
    }
  },

  computed: {
    ...mapState(['fontColor']),
  },

  created() {
    this.tabs = this.$children
  },

  mounted() {
    this.selectTab(this.tabs[0].title, 0)
  },

  methods: {
    selectTab(title: string | undefined, selectedTab: number) {
      this.selectedIndex = selectedTab

      this.$nuxt.$emit('tab-clicked', title)
    },
  },
})
</script>

<style scoped>
ul.tabs-header {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0 30px;
  margin-bottom: 10px;
  border-bottom: 1px solid #707070;
}

ul.tabs-header > li {
  cursor: pointer;
  font-size: 18px;
  margin-right: 20px;
}

ul.tabs-header > li > div {
  height: 3px;
  width: 100%;
  border-radius: 5px 5px 0px 0px;
  margin-top: 4px;
}
</style>
