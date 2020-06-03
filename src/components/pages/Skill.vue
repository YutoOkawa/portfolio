<template>
    <div class="skill">
        <h1 class="content-title"> {{ msg }} </h1>
        <h4> {{ text }} </h4>
    </div>
</template>

<script>
export default {
    name: 'Skill',
    data () {
        return {
            msg: '触ったことのある言語',
            text: 'Go言語, Python, C言語, C++, JavaScript, Node.js, Vue.js, Arduino, Java'
        }
    }
}
</script>

<style scoped>

div {
    background-color: orange;
    height: 500px;
}

h1 {
    color: white;
}

p {
    width: 60%;
    display: inline-block;
}
</style>