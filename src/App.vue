<template>
  <div id="app">
    <seller-header :seller="seller"></seller-header>
    <tab></tab>
    <router-view class="router-view" :seller="seller"/>
  </div>
</template>

<script>
import SellerHeader from './components/SellerHeader'
import Tab from './components/Tab'
import { getSellerData } from '../src/api/api'
export default {
  name: 'App',
  components: {
    SellerHeader,
    Tab
  },
  data () {
    return {
      seller: {}
    }
  },
  created () {
    getSellerData().then(res => {
      res = res.data
      this.seller = res.result
    })
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
