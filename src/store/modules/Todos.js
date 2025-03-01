import axios from 'axios'

const state = {
    todos: []
}

const getters = {
    allTodos: state => state.todos
}

const actions = {
    async fetchTodos({ commit }) {
        const res = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        )
        commit('setTodos', res.data)
    },
    async addTodo({ commit }, title) {
        const res = await axios.post(
            'https://jsonplaceholder.typicode.com/todos',
            {
                title,
                completed: false
                
            }
        )
        console.log(res.data)
        commit('newTodo', res.data)
    },
    async updateTodo({ commit }, id) {
        commit('updateCompleted', id)
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('deleteTodos', id)
    },
    async filterTodos({ commit }, event) {
        let value = event.target.value
        let res = await axios.get(
            `https://jsonplaceholder.typicode.com/todos?_limit=${value}`
        )
        commit('filterTodos', res)
    }
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    updateCompleted: (state, id) => state.todos.map(todo => {
        if (todo.id == id) {
            todo.completed = !todo.completed
            return
        }
    }),
    deleteTodos: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    filterTodos: (state, res) => state.todos = res.data
}

export default {
    state,
    getters,
    actions,
    mutations
}
