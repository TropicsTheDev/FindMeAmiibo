<template>
  <div id="app">
    <header>
      <h1>Amiibo Crud</h1>
      <Navigation />
    </header>

    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view @get-amiibo="getAmiibo" @item-selected="selectAmiibo" :request="requestedAmiibo" :selected="selectedAmiibo" />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  },
  data() {
    return {
      requestedAmiibo: [],
      selectedAmiibo: {},
      favoriteAmiibo: []
    };
  },
  methods: {
    getAmiibo(request) {
      if(request.amiibo.length > 0){
      this.requestedAmiibo = request.amiibo;
      }
      this.$router.push("/browse");
      //console.log(this.requestedAmiibo);
    },
    selectAmiibo(amiibo){
      this.selectedAmiibo = amiibo;
      this.$router.push("/focused");
    }
  }
};
</script>

<style>
body{
  padding: 0px;
  margin: 0px;
  max-width: 100vw;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  font-size: 20px;
}

header {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  background-color: #ff3366;
}

h1, h2, h3 {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: black;
}
</style>
