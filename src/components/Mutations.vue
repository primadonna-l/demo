<template>
  <div class="mutations">
   mutations
   <h1> 修改数据 原始写法</h1>
   <button @click='incrementNum'>加一</button>
   <p>修改数据mapMutayions</p>
   <button @click='decrementNum'>减一</button>
   <p>num:{{num}}</p>
  </div>
</template>

<script>

import {mapMutations, mapState} from 'vuex'

export default {
  methods: {
    ...mapMutations(['incrementNum','decrementNum'])
    // incrementNum(){
    //   // console.log('xxx')
    //   //修改store中的
    //   this.$store.commit('incrementNum')
    // },
    // decrementNum(){
    //   this.$store.commit('decrementNum')
    // }
  },
  computed:{
    ...mapState(['num'])
  }
}
</script>

<style scoped>

</style>
