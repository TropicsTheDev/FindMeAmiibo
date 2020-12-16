<template>
  <!-- view to display items from search results -->
  <main>
    <!-- Uses v-if to denote  if there is request, show the requested data-->
    <div v-if="request.length != 0">
      <h4>
          We found <strong>{{request.length}}</strong> results for your search.
      </h4>
      <ul>
        
        <Item
          v-for="item in request"
          :key="(item.head + item.tail)"
          :item="item"
          @click.native="selectItem(item)"
        />
      </ul>
    </div>
    <!-- Else, show the all items query -->
    <div v-else>
      <h4 v-if="error != null" class="error">
        {{error}}
      </h4>
      <ul>
        <Item
          v-for="item in browsing"
          :key="(item.head + item.tail)"
          :item="item"
          @click.native="selectItem(item)"
        />
      </ul>
    </div>
    <footer>
      You made it to the end!
    </footer>
  </main>
</template>

<script>
import Item from "../components/Item";
export default {
  name: "Broswe",
  props: ["request", "error"],
  components: { Item },
  data() {
    return {
      browsing: [], //container incase the request has no items
    };
  },
  methods: {
    selectItem(item) {
      console.log(item);
      this.$emit("item-selected", item);
    },

    //console.log(data.amiibo );
    //console.log(data.amiibo[0].gameSeries);
  },
  mounted() {
    const justBrowsing = async () => {
      const api = "https://www.amiiboapi.com/api/amiibo";
      const data = await fetch(api).then((response) => response.json());
      this.browsing = data.amiibo;
    };
    justBrowsing();
  },
};
</script>

<style scoped>
h4, footer{
  display: block;
  width: 25%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #83FF33;
  font-weight: bold;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.75);
}
.error{
  background-color: #CC0033;
  color: white;
}
div{
  margin: 50px 0;
}
ul {
  max-width: 100vw;
  padding: 20px;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  /* background-color: red; */
}
strong {
  color: black;
}

footer{
  background-color: #ff3366;
  margin-bottom: 20px;
  color: white;
}
</style>