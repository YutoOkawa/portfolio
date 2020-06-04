<template>
    <div class="output">
        <h1 class="content-title"> {{ msg }} </h1>
        <div class="content" v-for="(output, index) in outputs" :key="index">
            <h3> {{ output.name }} </h3>
            <p> {{ output.text }} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Output',
    data () {
        return {
            msg: 'Output List',
            outputs: [
                {
                    name: 'Test',
                    text: 'Test'
                }
            ]
        }
    }
}
</script>

<style scoped>

div.output {
    text-align: center;
    height: 500px;
}

div.content {
    background-color: #eee;
    display: inline-block;
    margin: 10px;
    width: 30%;
}

h3 {
    color: black;
}

p {
    width: 90%;
    display: inline-block;
    text-align: center;
}

</style>