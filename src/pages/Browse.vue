<template>
    <main>
        <ul v-for="item in request" :key="(item.head + item.tail)">
            <Item :item="item"/>
        </ul>
    </main>
</template>

<script>
import Item from "../components/Item";
    export default {
        name: "Broswe",
        props: ["request"],
        components: { Item }
    }
</script>

<style scoped>

</style>