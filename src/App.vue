<template>
  <div id="app">
    <seller-header></seller-header>
    <tab></tab>
    <router-view class="router-view"/>
    <seller-footer/>
  </div>
</template>

<script>
import SellerHeader from './components/SellerHeader'
import Tab from './components/Tab'
import SellerFooter from './components/SellerFooter'
export default {
  name: 'App',
  components: {
    SellerHeader,
    Tab,
    SellerFooter
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
  margin-bottom: 50px;
}
</style>
