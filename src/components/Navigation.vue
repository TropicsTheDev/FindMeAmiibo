<template functional="true">
  <nav>
    <ul>
      <li>
        <router-link to="/">Quick Search</router-link>
      </li>
      <li>
        <router-link to="/browse">Browse</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style scoped>
nav {
  justify-self: right;
  text-align: left;
  font-family: Impact;
  margin-right: 30px;
}

li {
  display: inline-block;
  justify-self: left;
  align-self: center;
  text-align: left;
  margin: 10px 10px;
}
a{
  text-decoration: none;
  color: black;
}
</style>