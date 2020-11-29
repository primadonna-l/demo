import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: localStorage.getItem("user"),
        num: 10,
        todo: [
            { id: 1, completed: false, con: 'go to sleeping' },
            { id: 2, completed: false, con: 'go to shopping' },
            { id: 3, completed: true, con: 'go to playing' },
            { id: 4, completed: true, con: 'go to eating' }
        ]
    },
    mutations: {
        //定义修改的方式
        incrementNum(state) {
            state.num = state.num + 1
        },
        decrementNum(state) {
            state.num = state.num - 1
        },
        initTodos: (state, todo) => {
            state.todo = todo
        }
    },
    actions: {
        getTodos({ commit }) {
            //异步请求 resful API 根据请求的method 决定业务
            // console.log("send request")
            axios.get("http://jsonplaceholder.typicode.com/todos").then(res => {
                // console.log(res.data.splice(0, 10))
                const todo = res.data.splice(0, 10)
                    //调用
                    // commit('initTodos', todos)
                commit('initTodos', todo)
            })
        }
    },
    getters: {
        //所有的todos
        // TodosCount(state) {
        //     return state.todo.length
        // },
        TodosCount: state => state.todo.length,
        //完成todos的数量
        //filter 如果传过来的数据为true就保留，false移除
        // CompletedTodosCount(state) {
        //     return state.todo.filter((item) => {
        //         return item.completed ? true : false
        //     }).length
        // }
        CompletedTodosCount: state => state.todo.filter(item => item.completed).length,
        //根据id获取todo
        // getTodoById: state => id => state.todo.filter(item => item.id == id)
        getTodoById(state) {
            return function(id) {
                return state.todo.filter(item => item.id == id)
            }
        },
        getNum: state => state.num + 1
    }
})