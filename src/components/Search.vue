<template>
    <form @submit.prevent="search($event)">
        <input v-model="searchValue" placeholder="Mario"/>
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
<style scoped>
input, button{
    font-family: Arial;
    font-size: 20px;
    color: #2c3e50;
}
    button{
        background-color: #83FF33;
        border-radius: 5px;
        border: none;
        padding: 10px;
        transition: .25s;
    }
    button:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
    input{
        padding: 10px;
        margin-right: 10px;
    }
</style>