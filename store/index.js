export const state = () => ({
  color: '#2F2735',
  fontColor: '#FF6464',
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
