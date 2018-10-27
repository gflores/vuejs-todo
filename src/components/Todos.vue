<template>

  <div class="todos">
    <h1> Todos </h1>

    <form @submit.prevent="addNewTask">
      <input v-model="newTaskText"/>
      <button type="submit"> Add </button>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" class="todo" :class="{completed: todo.isFinished}" :key="index"
        @click="toggleTodo(todo)">
        <span class="todo-text">{{todo.text}}</span>
        <span @click="removeTodo(todo)" class="delete"> delete </span>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "Todos",
  props: ["todos"],
  data () {
    return {
      newTaskText: ""
    }
  },
  methods: {
    addNewTask() {
      if (this.newTaskText != "") {
        this.$store.dispatch("addTodo", this.newTaskText);
        this.newTaskText = "";
      }
    },
    toggleTodo(todo) {
      this.$store.dispatch("toggleTodo", todo);
    },
    removeTodo(todo) {
      this.$store.dispatch("removeTodo", todo);
    }
  }
}
</script>

<style>
  .todos {
    width: 800px;
    margin: 0 auto;
  }
  ul {
    list-style: none;
  }

  .todo-text {
    padding: 10px;
    display: inline-block;
    cursor: pointer;
    border-radius: 4px;
  }

  .todo-text:hover {
    background: hsla(0, 0%, 80%, 1);
  }

  .completed .todo-text {
    text-decoration: line-through;
  }
  .delete {
    color: red;
    font-size: 14px;
    margin-left: 20px;
    cursor: pointer;
  }
</style>