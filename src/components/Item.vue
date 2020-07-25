<template>
  <li>
    <img :src="item.image" />
    <div>
      <h3>{{item.name}}</h3>
      <label>
        Character
        <p>{{item.character}}</p>
      </label>
      <label>
        <p>Game {{item.gameSeries}}</p>
      </label>
      <label>
        Release
        <p>{{item.release.na}}</p>
      </label>
    </div>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ["item"]
};
</script>

<style scoped>
li {
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
}
label{
    font-weight: bold; 
}
p{
    font-weight:normal;
}
</style>