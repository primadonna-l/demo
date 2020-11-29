<template>
  <div class="actions">
   actions
   <h1>异步获取数据</h1>
   <button @click='getTodos'>加载数据</button>
   <ul>
     <li v-for='item in todo' :key=item.id>{{item.title?item.title:item.con}}</li>
   </ul>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  methods: {
    // loadTodos(){
    //   this.$store.dispatch('getTodos')
    // },
    ...mapActions(['getTodos'])

  },
  computed:{
    ...mapState(['todo'])
  }
    
  
}
</script>

<style scoped>

</style>
