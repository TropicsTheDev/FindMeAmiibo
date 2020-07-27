<template>
  <main>
    <ul v-if="request.length != 0">
      <Item  v-for="item in request" :key="(item.head + item.tail)" :item="item" @click.native="selectItem(item)" />
    </ul>
    <ul v-else>
      <Item  v-for="item in browsing" :key="(item.head + item.tail)" :item="item" @click.native="selectItem(item)" />
    </ul>
  </main>
</template>

<script>
import Item from "../components/Item";
export default {
  name: "Broswe",
  props: ["request"],
  components: { Item },
  data(){
    return {
      browsing: []
    }
  },
  methods: {
      selectItem(item){
          console.log(item);
          this.$emit("item-selected", item);
      },
       
      //console.log(data.amiibo );
      //console.log(data.amiibo[0].gameSeries);
    
       
  },
  // mounted(){
  //   const justBrowsing = async () => {
  //       const api= "https://www.amiiboapi.com/api//amiibo";
  //       const data = await fetch(api).then(response => response.json())
  //       this.browsing = data.amiibo;
  //   }
  //   justBrowsing();
  // }
  
  
};
</script>

<style scoped>
ul{
  padding: 20px;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  /* background-color: red; */
}
</style>