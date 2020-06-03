<template>
    <div class="profile">
        <h1 class="content-title"> {{ msg }} </h1>
        <p> {{ text }} </p>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    data () {
        return {
            msg: '自己紹介',
            text: '暗号とFIDOについて勉強しています。'
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

p {
    width: 60%;
    display: inline-block;
}
</style>