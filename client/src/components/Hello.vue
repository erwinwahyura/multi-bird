<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="container">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="username" class="form-control" id="username">
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd">
            </div>
            <button type="submit" class="btn btn-default">Login</button>
          </form>
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
<style scoped>
h1, h2 {
  font-weight: normal;
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
