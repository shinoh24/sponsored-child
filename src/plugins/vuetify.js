import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg'
  },
  theme: {
    light: true,
    themes: {
      light: {
        primary: '#FC714A',
        secondary: '#4374C9',
        black: '#222222'
      }
    }
  }
})
