<template>
    <div class="section">
        <h1 class="content-title"> {{ msg }} </h1>
        <div class="skill">
            <div class="content" v-for="(skill, index) in skills" :key="index">
                <h2 class="skill_name"> {{ skill.name }} </h2>
                <img v-bind:src="skill.logo" class="lang_icon"><br>
                <!-- <p class="skill_text"> {{ skill.text }} </p> -->
            </div>
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
                    logo: require('@/assets/image/Go-Logo_Blue.svg'),
                    text: '',
                },
                {
                    name: 'Python',
                    logo: require('@/assets/image/icons8-python.svg'),
                    text: '',
                },
                {
                    name: 'C',
                    logo: require('@/assets/image/c-2975.svg'),
                    text: '',
                },
                {
                    name: 'C++',
                    logo: require('@/assets/image/c.svg'),
                    text: '',
                },
                {
                    name: 'Java',
                    logo: require('@/assets/image/java-4.svg'),
                    text: '',
                },
                {
                    name: 'JavaScript',
                    logo: require('@/assets/image/javascript-1.svg'),
                    text: '',
                },
                {
                    name: 'Node.js',
                    logo: require('@/assets/image/Node.js_logo.svg'),
                    text: '',
                },
                {
                    name: 'Vue.js',
                    logo: require('@/assets/image/logo.svg'),
                    text: '',
                },
                {
                    name: 'Git',
                    logo: require('@/assets/image/git-icon.svg'),
                    text: '',
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_mixin.scss';

.section {
    @include section;
}

.skill {
    @include box-wrapper;
}

.content {
    @include box-shadow;
    @include box(15%);
    // background-color: #dbefbc;
}

.skill_name {
    @include box-title;
}

.skill_text {
    @include box-text;
    text-align: left;
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