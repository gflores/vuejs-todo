import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const localStoragePlugin = store => {
  store.subscribe((mutation, { todos }) => {
    window.localStorage.setItem("todos", JSON.stringify(todos))
  })
}

export default new Vuex.Store({
  state: {
    todos: JSON.parse(window.localStorage.getItem("todos") || '[]')
  },
  mutations,
  actions,
  plugins: [localStoragePlugin]
})
