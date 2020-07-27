<template>
    <div>
        <SingleItem :selected="selected"/>
    </div>
</template>

<script>
import SingleItem from "../components/SingleItem"
    export default {
        name: "FocusedItem",
        props: ["selected"],
        components: { SingleItem }
    }
</script>

<style scoped>
div{
    padding: 20px;
}

</style>