<template>
    <div class="header">
        <div class="header-inner">
            <h1 class="title">Yuto's Profile</h1>
            <div class="nav">
                <a href="#" class="nav-button" @click="clickSmoothScroll('#top')">Top</a>
                <a href="#" class="nav-button" @click="clickSmoothScroll('#profile')">Profile</a>
                <a href="#" class="nav-button" @click="clickSmoothScroll('#skill')">Skill</a>
                <a href="#" class="nav-button" @click="clickSmoothScroll('#output')">Output</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        clickSmoothScroll (x) {
            event.preventDefault()
            this.$SmoothScroll(
                document.querySelector(x),
                900,
                null,
                null,
                'y'
            )
        }
    }
}
</script>

<style>
.header{
    background-color: #cfebdf;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;
}

.header-inner{
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
}

.title{
  padding:20px 0px;
  margin:unset;
  color: #4e878c;
}

.nav{
  margin: auto ;
  margin-right: 0;
  padding: auto;
}

.nav-button{
  padding:10px;
  text-decoration: none;
  border-radius: 5px;
  margin-right:10px;
  margin-left: 10px;
  outline: none;
  color: #4e878c;
}
</style>