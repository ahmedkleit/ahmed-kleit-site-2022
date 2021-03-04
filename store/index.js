export const state = () => ({
  color: '#BCF3EA',
  fontColor: '#1C4752',
})

export const mutations = {
  setColor(state, color) {
    state.color = color
  },

  setFontColor(state, fontColor) {
    state.fontColor = fontColor
  },
}
