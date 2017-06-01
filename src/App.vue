<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  padding: 0;
  margin:0;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
img{
  vertical-align: middle;
}
html{
  font-size: 20px;
}

footer{
  width: 100%;
  padding: 0.5rem 0;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background: #fff;
}

</style>
