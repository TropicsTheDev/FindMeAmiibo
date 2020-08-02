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
  display: grid;
  justify-items: center;
  align-items: end;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
  background-color: cornsilk;
  border-radius: 5px;
  padding: 20px;
  transition: .25s ease-in-out;
}
li:hover{
  /* Scale up hover for user feedback */
  transform: scale(1.05);
  cursor: pointer;
   box-shadow: 0px 10px 10px rgba(131, 255, 51, 1);
  
}
img{
  max-width: 100%;
}
div{
  padding: 20px;
  margin: 0;
}
label{
    font-weight: bold; 
    display: block;
    text-align: left;
}
h3{
    margin: 0;
    display: inline-block;
}
</style>