<template>
  <div id="app">
    <seller-header></seller-header>
    <tab></tab>
    <router-view class="router-view"/>
  </div>
</template>

<script>
import SellerHeader from './components/SellerHeader'
import Tab from './components/Tab'
export default {
  name: 'App',
  components: {
    SellerHeader,
    Tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.router-view {
  margin-top: 170px;
}
</style>
