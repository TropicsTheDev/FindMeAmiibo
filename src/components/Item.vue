<template>
    <li>
        <img :src="item.image"/>
    </li>
</template>

<script>
    export default {
        name: "Item",
        props: ["item"],
        
    }
</script>

<style scoped>

</style>