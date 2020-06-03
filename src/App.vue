<template>
  <div id="app">
    <!-- <tab-menu></tab-menu>
    <router-view/> -->
    <Header id="header"></Header>
    <!-- <div class="nav-res">
      <a href="#" class="link-conten" @click="clickSmoothScroll('#top')">
        <p class="comment">Top</p>
      </a>
      <a href="#" class="link-conten" @click="clickSmoothScroll('#profile')">
        <p class="comment">Profile</p>
      </a>
      <a href="#" class="link-conten" @click="clickSmoothScroll('#skill')">
        <p class="comment">Skill</p>
      </a>
      <a href="#" class="link-conten" @click="clickSmoothScroll('#output')">
        <p class="comment">Output</p>
      </a>
    </div> -->

    <Top id="top"></Top>
    <Profile id="profile"></Profile>
    <Skill id="skill"></Skill>
    <Output id="output"></Output>
  </div>
</template>

<script>
// import TabMenu from './components/TabMenu'
import Top from './components/pages/Top'
import Profile from './components/pages/Profile'
import Skill from './components/pages/Skill'
import Output from './components/pages/Output'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    // TabMenu,
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
  margin-top: 60px;
}
</style>
