<template>
    <div class="skill">
        <h1 class="content-title"> {{ msg }} </h1>
        <div class="content" v-for="(skill, index) in skills" :key="index">
            <h4> {{ skill.name }} </h4>
            <!-- <h4> {{ skill.text }} </h4> -->
            <img v-bind:src="skill.logo" class="lang_icon">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Skill',
    data () {
        return {
            msg: 'Skill List',
            skills: [
                {
                    name: 'Golang',
                    logo: require('@/assets/image/Go-Logo_Blue.svg')
                },
                {
                    name: 'Python',
                    logo: require('@/assets/image/icons8-python.svg')
                },
                {
                    name: 'C',
                    logo: require('@/assets/image/c-2975.svg')
                },
                {
                    name: 'C++',
                    logo: require('@/assets/image/c.svg')
                },
                {
                    name: 'Java',
                    logo: require('@/assets/image/java-4.svg')
                },
                {
                    name: 'JavaScript',
                    logo: require('@/assets/image/javascript-1.svg')
                },
                {
                    name: 'Node.js',
                    logo: require('@/assets/image/Node.js_logo.svg')
                },
                {
                    name: 'Vue.js',
                    logo: require('@/assets/image/logo.svg')
                },
                {
                    name: 'Git',
                    logo: require('@/assets/image/git-icon.svg')
                }
            ]
        }
    }
}
</script>

<style scoped>
div.skill {
    background-color: white;
}

div.content {
    display: inline-block;
    margin: 10px;
    width: 15%;
}

h1 {
    color: black;
}

p {
    width: 60%;
    display: inline-block;
}

.lang_icon {
    height: 75px;
    width: 75px;
}
</style>