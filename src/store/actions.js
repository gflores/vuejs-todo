export default {
  addTodo ({ commit }, text) {
    commit('addTodo', {
      text,
      isFinished: false
    })
  },

  removeTodo ({ commit }, todo) {
    commit('removeTodo', todo)
  },

  toggleTodo ({ commit }, todo) {
    commit('editTodo', { todo, isFinished: !todo.isFinished })
  }
}
