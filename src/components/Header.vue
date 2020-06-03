<template>
    <div>
        <a href="#" class="link-conten" @click="clickSmoothScroll('#top')">Top</a>
        <a href="#" class="link-conten" @click="clickSmoothScroll('#profile')">Profile</a>
        <a href="#" class="link-conten" @click="clickSmoothScroll('#skill')">Skill</a>
        <a href="#" class="link-conten" @click="clickSmoothScroll('#output')">output</a>
    </div>
</template>

<script>
export default {
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
.nav-button{
  padding:10px;
  text-decoration: none;
  border-radius: 5px;
  margin-right:10px;
  margin-left: 10px;
  outline: none;
  color: whitesmoke;
}
</style>