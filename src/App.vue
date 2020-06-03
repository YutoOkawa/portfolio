<template>
  <div id="app">
    <!-- <tab-menu></tab-menu>
    <router-view/> -->
    <Header id="header"></Header>
    <Top id="top"></Top>
    <Profile id="profile"></Profile>
    <Skill id="skill"></Skill>
    <Output id="output"></Output>
  </div>
</template>

<script>
import Top from './components/pages/Top'
import Profile from './components/pages/Profile'
import Skill from './components/pages/Skill'
import Output from './components/pages/Output'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
    Top,Profile,Skill,Output
  },
  methods: {
    clickSmoothScroll (x) {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(x),
        800,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header{
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1;
  background-color: pink;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
