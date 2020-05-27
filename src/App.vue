<template>
  <div id="app">
    <keep-alive include="foodIndex">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
@import "@/assets/styles/common.scss";
</style>
