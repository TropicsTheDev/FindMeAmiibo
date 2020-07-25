<template>
  <div class="hello">
    <h2>Search For An Amiibo!</h2>
    <Search @start-search="searchAmiibo"/>
  </div>
</template>

<script>
import Search from "../components/Search";

export default {
  name: 'QuickSearch',
  components: {
    Search
  },
  data(){
    return {

    }
  },
  methods: {
    async searchAmiibo(value){
      const api= `https://www.amiiboapi.com/api//amiibo/?character=${value}`;
      const data = await fetch(api).then(response => response.json())
      this.$emit("get-amiibo", data);
      //console.log(data.amiibo );
      //console.log(data.amiibo[0].gameSeries);
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
