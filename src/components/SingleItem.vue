<template>
  <main>
    <img :src="selected.image" />
    <div>
      <h3>{{selected.name}}</h3>
      <label>
        Character
        <p>{{selected.character}}</p>
      </label>
      <label>
        <p>Game {{selected.gameSeries}}</p>
      </label>
      <label>
        Release
        <p>{{selected.release.na}}</p>
      </label>
    </div>
  </main>
</template>

<script>
export default {
  name: "SingleItem",
  props: ["selected"]
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