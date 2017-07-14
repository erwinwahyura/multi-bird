<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <div class="panel panel-default" >
          <div class="panel-heading">
            <h3 class="panel-title">List Online User</h3>
          </div>
          <div class="panel-body">
            <!-- Extra small button group -->
            <div class="btn-group col-md-12"  v-for="dc in datacore">
              <button class="col-md-12 btn btn-default btn-xs dropdown-toggle " type="button" data-toggle="dropdown">
                {{ dc.username }} <span class="badge">online</span>
              </button>
              <ul class="dropdown-menu col-md-12">
                <button class="btn btn-danger" type="button" name="button" @click="logout()">Logout</button>
              </ul>
            </div>
            <div class="btn-group col-md-12">

              <button class="col-md-12 btn btn-default btn-xs dropdown-toggle " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Guest911 <span class="badge">online</span>
              </button>
              <ul class="dropdown-menu col-md-12">
                <button class="btn btn-danger" type="button" name="button" @click="tantangPlayer()">tantang player1</button>
              </ul>
            </div>


          </div>
        </div>

      </div>
      <div class="col-md-10">
        <router-view></router-view>
      </div>
    </div>

  </div>
<!-- <router-link to='' class="list-group-item">tantang duel</router-link> -->
</template>

<script>
export default {
  data () {
    return {
      data: ''
    }
  },
  methods: {
    tantangPlayer () {
      alert('tunggu player menjawab tantangan anda...')
    },
    logout () {
      this.localStorage.destroy()
    }
  },
  firebase () {
    return {
      datacore: this.$firebaseDB.ref('login')
    }
  },
  created () {
    if (localStorage.getItem('id') == null) {
      this.$router.push('/login')
    }
    this.data = localStorage.getItem('id')
  }
}
</script>

<style lang="css" scoped>
.panel-body {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  text-align: left;
}
.badge {
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background-color: #3c763d;
    border-radius: 10px;
}
.btn-group.col-md-12 {
    padding: 0px;
}
span.badge {
    float: right;
}
button.col-md-12.btn.btn-default.btn-xs.dropdown-toggle {
    text-align: left;
}
.col-md-10 {
  /*background-color: black;*/
}
</style>
