<template>
    <div class="top">
        <h1> {{ msg }} </h1>
    </div>
</template>

<script>
export default {
    name: 'Top',
    data () {
        return {
            msg: 'Welcome to YutoOkawa portfolio!'
        }
    }
}
</script>

<style scoped>

div {
    background-color: #03111a;
    background-size: cover;
    height: 60vh;
}

h1 {
    color: white;
    padding: 100px 0 20px 0;
    margin: 0px 20% 100px 20%;
}

</style>