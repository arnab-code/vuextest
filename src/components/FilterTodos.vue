<template>
    <div id="filter-todos">
        <br/><strong>Filter todos: </strong>
        <select @change="filterTodos($event)">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="10">10</option>
        </select>
        <span>Total: {{total}}</span>
        <span>Completed: {{completed}}</span>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: mapActions(['filterTodos']),
    computed: {
        completed() {
            return this.$store.state.Todos.todos.filter(todo => todo.completed).length
        },
        total() {
            return this.$store.state.Todos.todos.length
        }
    }
}
</script>

<style>
select{
    margin-right: 20px;
    height: 30px;
    border-radius: 5px;
}
#filter-todos>span{
    background-color: #41b883;
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
}
</style>