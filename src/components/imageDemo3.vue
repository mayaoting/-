<template>
  <div>
    <image3-nav v-on:linkIndex="showIndexFromNav"></image3-nav>
    <image3-contain v-bind:index="index"></image3-contain>
  </div>
</template>

<script>

  import image3Nav from './image3Nav'
  import image3Contain from './image3Contain'
    export default {
        name: "image-demo3",
        data(){
          return {
            index:1
          }
        },
        components: {
          "image3-nav":image3Nav,
          "image3-contain":image3Contain
        },
      methods:{
          showIndexFromNav:function (data) {
            this.index = data;
          }
      }
    }
</script>

<style scoped>
</style>
