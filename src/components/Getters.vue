<template>
  <div class="getters">
   <p>todos的数量{{getTodosCount}}</p>
   <p>todos的数量{{this.$store.getters.TodosCount}}</p>
   <!-- <p>完成的Todos数量{{this.$store.getters.CompletedTodosCount}}</p> -->
   <p>完成的Todos数量{{CompletedTodosCount}}</p>
   <p>根据id获取数据{{getTodoById(4)}}</p>
    <p>获取num：{{getNum}}</p>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'
export default {
  computed:{
    // getTodoById(id){
    //   return this.$store.getters.getTodoById
    //   },
      getTodosCount(){
      // console.log(this.$store.getters)
      return this.$store.getters.TodosCount
    },
    ...mapGetters (['Todoscount','CompletedTodosCount','getNum','getTodoById'])
    }
    
  }
  

</script>

<style scoped>

</style>
