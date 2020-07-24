<template>
  <div id="app">
    <Navigation/>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view/>
    
  </div>
</template>

<script>
import Navigation from "./components/Navigation";


export default {
  name: 'App',
  components: {
    Navigation
  },
  data(){
    return {
      requestedAmiibo: [],
      favoriteAmiibo: []
    }
  },
  methods: {
     getAmiibo(request){
      this.requestedAmiibo = request.amiibo;
      //console.log(this.requestedAmiibo);  
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
