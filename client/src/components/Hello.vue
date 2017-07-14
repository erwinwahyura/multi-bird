<template>
  <div class="hello">
    <div class="container">
      <div class="row" style="margin-top:300px;">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <router-link to="login"><button type="button" name="button" class="btn btn-primary btn-lg">Do you want to play?</button></router-link>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
h1, h2 {
  font-weight: normal;
}

.hello {
  background-image: url('https://s-media-cache-ak0.pinimg.com/originals/f4/2c/f9/f42cf965af6736aee516d84863fdd30e.jpg');
  /*background-repeat: no-repeat;  */
  position: relative;
  width: 100%;
  height: 840px;
  margin-left: auto;
  margin-right: auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
