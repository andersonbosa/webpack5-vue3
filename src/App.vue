<template>
  <div align="center" style="margin-top: 150px">
    <h1>Webpack5 + Vue3</h1>
    <button class="btn" @click="incrementCount">count {{ countValue }}</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  components: {},

  data () {
    return {}
  },

  setup () {
    function countValue () { ref(0) }
    function incrementCount () {
      countValue.value++
    }

    return {
      countValue,
      incrementCount,
    }
  }
}
</script>

<style scoped>

</style>