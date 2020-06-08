<template>
  <div id="app">
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
import 'normalize.css'

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
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@700&display=swap');

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Oswald', 'M PLUS 1p', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content-title {
  padding: 120px 0 20px 0;
  margin: 50px 20% 100px 20%;
  position: relative;
  font-size: 2em;
  color: #333;
  border-bottom: rgba(12, 50, 78, 0.4) 3px solid;
}

</style>
