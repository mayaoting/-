<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Hello from './components/HelloWorld'
  export default {
  name: 'App',
  data(){
    return {
      title: "Vue App"
    }
  },
  components:{
    "app-header":Header,
    "app-hello":Hello
  }
}
</script>

<style scoped>


</style>

