<template>
  <li>
    <img :src="item.image" />
    <div>
      <h3>{{item.name}}</h3>
    </div>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ["item"]  //will get
};
</script>

<style scoped>
li {
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
  background-color: cornsilk;
  transition: .25s ease-in-out;
}
li:hover{
  /* Scale up hover for user feedback */
  transform: scale(1.05);
  cursor: pointer;
}
img{
  max-width: 100%;
}
div{
  padding: 20px;
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