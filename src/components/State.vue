<template>
  <div class="state">
   state
   {{$store.state.num}}
   <ul>
     <li v-for="(item,index) in this.$store.state.todo" :key="index">
       {{item.con}}
     </li>
   </ul>
   <p>{{num1}}</p>
   <p>{{test}}</p>

  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
  computed:{
    test(){
      return 'xxxx'
    },
    // ...mapState(['num'])
    ...mapState({
      num1:'num'
    })
  }
}
</script>

<style scoped>

</style>
