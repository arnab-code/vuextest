<template>
    <div>
        <h3>All Todos</h3>
        <div class="legend">
            <span>Double click to mark as complete</span>
            <span> <span class="incomplete-box"></span> = Incomplete </span>
            <span> <span class="complete-box"></span> = Complete </span>
        </div>
        <div class="todos">
            <div
                v-for="todo in allTodos"
                class="todo"
                :key="todo.id"
                @dblclick.prevent="updateTodo(todo.id)"
                v-bind:class="{ 'is-complete': todo.completed }"
            >
                {{ todo.title }}
                <span @click="deleteTodo(todo.id)"><i class="fas fa-trash-alt"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Todos',
    computed: mapGetters(['allTodos']),
    methods: {
        ...mapActions(['fetchTodos', 'updateTodo', 'deleteTodo'])
    },
    created() {
        this.fetchTodos()
    }
}
</script>

<style scoped>
.todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}
.todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
}
svg {
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: #fff;
    cursor: pointer;
}
svg:hover {
    color: crimson;
}
.legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}
.complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
}
.incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
}
.is-complete {
    background: #35495e;
    color: #fff;
}
@media (max-width: 500px) {
    .todos {
        grid-template-columns: 1fr;
    }
}
</style>
