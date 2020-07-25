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
  font-family: Impact;
}
li {
  display: inline-block;
}
</style>