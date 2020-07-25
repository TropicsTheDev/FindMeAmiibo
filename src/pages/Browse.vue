<template>
  <main>
    <ul v-for="item in request" :key="(item.head + item.tail)">
      <Item :item="item" @click.native="selectItem(item)" />
    </ul>
  </main>
</template>

<script>
import Item from "../components/Item";
export default {
  name: "Broswe",
  props: ["request"],
  components: { Item },
  methods: {
      selectItem(item){
          console.log(item);
          this.$emit("item-selected", item);
      }
  }
};
</script>

<style scoped>
</style>