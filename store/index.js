export const state = () => ({
  color: '#313545',
  fontColor: '#E66464',
  buttonColor: '#F7D8D9',
})

export const mutations = {
  setColor(state, color) {
    state.color = color
  },

  setFontColor(state, fontColor) {
    state.fontColor = fontColor
  },

  setButtonColor(state, buttonColor) {
    state.buttonColor = buttonColor
  },
}
