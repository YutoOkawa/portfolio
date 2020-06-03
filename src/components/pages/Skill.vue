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
            msg: 'Skill List',
            text: 'Go言語, Python, C言語, C++, JavaScript, Node.js, Vue.js, Arduino, Java'
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