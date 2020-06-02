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
    background-color: white;
    height: 500px;
}

h1 {
    color: black;
}

</style>