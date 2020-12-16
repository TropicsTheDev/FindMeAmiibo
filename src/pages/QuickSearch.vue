<template>
  <!-- Home page component. Simple search functionality -->
  <div class="hello">
    <img src="../assets/compass.png"/>
    <h2>Search For An Amiibo!</h2>
    <Search @start-search="searchAmiibo" />
  </div>
</template>

<script>
import Search from "../components/Search";

export default {
  name: "QuickSearch",
  components: {
    Search,
  },
  data() {
    return {};
  },
  methods: {
    async searchAmiibo(value) {
      let api;
      let data;
      //if there's a search value use value. else mass query

      if (value !== "") {
        api = `https://www.amiiboapi.com/api/amiibo/?character=${value}`;
      } else {
        api = "https://www.amiiboapi.com/api/amiibo";
      }
      try { 
        let response = await fetch(api);
        data = await  response.json();
        
        //console.log(data.amiibo);
      } catch (err) {
        alert("failed", err);
        data = err;
        //this.$emit("failed-search", error);
      }
       console.log(data); //this returns either the amiibo or an error
        this.$emit("get-amiibo", data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  margin-top: 7.5%;
}
</style>
