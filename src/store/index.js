import Vue from 'vue'
import Vuex from 'vuex'

import child from './app/child'

import createPersistedState from 'vuex-persistedstate'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    child
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [createPersistedState()]
})

export default store
