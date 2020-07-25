<template>
    <form @submit.prevent="search($event)">
        <input v-model="searchValue"/>
        <button type="submit" >Search</button>
    </form>
</template>

<script>
    export default {
        name: "Search",
        data () {
            return {
                searchValue: ""
            }
        },
        methods: {
            search(event){
                //console.log(event);
                event.preventDefault();
                this.$emit("start-search", this.searchValue);
            }
        }
    }
</script>