<template>
    <div id="add-todo">
        <h3>Add todo</h3>
        <div>
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add todo..." />
                <input type="submit" />
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(e) {
            e.preventDefault()
            console.log(e)
            this.addTodo(this.title)
            this.title = ''
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    height: 35px;
}
input[type='text'] {
    flex: 10;
    margin-right: 5px;
}
input[type='submit'] {
    flex: 2;
    background: #41b883;
    border-radius: 5px;
    font-size: 16px;
}
input[type='submit']:hover {
    background: #30a772
}
</style>
