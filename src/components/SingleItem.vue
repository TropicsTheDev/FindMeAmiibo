<template>
  <main>
    <img :src="selected.image" />
    <div>
      <h3>{{selected.name}}</h3>
      <label>
        Character:
        <p>{{selected.character}}</p>
      </label>
      <label>
        Game Series:
        <p>{{selected.gameSeries}}</p>
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
main{
  display: grid;
  grid-template-columns: 25%;
  justify-content: center;
  grid-gap: 20px;
  /* Single column grid. Display content in the  */
}
div{
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
  background-color: cornsilk;
  padding: 20px;
}
img{
  display: block;
  margin: 0 auto;
  /* centers image */
}
label{
    font-weight: bold; 
    display: block;
    text-align: left;
}
p{
    font-weight:normal;
    display: inline-block;
}
</style>