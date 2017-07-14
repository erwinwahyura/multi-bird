<template lang="html">
  <div class="col-sm-6 col-md-6">
    <div class="panel panel-default">
      <div class="panel-body">
        HEALTH
        <h1 id="hp1"> {{ hp1 }}</h1>
      </div>
    </div>
    <div class="thumbnail">
      <img :src="display " alt="">
      <div class="caption">
        <h3>player Name</h3>
        <h4>{{datacore[0].username}}</h4>
        <p>
          <!-- <i class="fa fa-shield" aria-hidden="true"></i> -->
          <button class="btn btn-primary tombol" type="button" name="button" @click="clickAttack">
            <span class="glyphicon glyphicon-flash" aria-hidden="true" style="font-size:30px"></span>
          </button>
          <button class="btn btn-info tombol" type="button" name="button" @click="clickDefence">
            <span class="glyphicon glyphicon-move" aria-hidden="true" style="font-size:30px"></span>
          </button>
          <button class="btn btn-danger tombol" type="button" name="button" @click="clickBreak">
            <span class="glyphicon glyphicon-fire" aria-hidden="true" style="font-size:30px"></span>
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hp1', 'choice1'],
  data () {
    return {
      attack: 'https://media.giphy.com/media/ntoC59BF4CRqM/giphy.gif',
      defence: 'https://media.tenor.com/images/9ee1bbc0548e275be50182ede6b7a3f9/tenor.gif',
      break: 'https://lh3.googleusercontent.com/-eQ8QStwEQ0o/WHk3SRqcxPI/AAAAAAAABSc/2f1VEYLyR_8EIVJifIj07geioWdHza_6gCJoC/w800-h800/6711f42b7494aefcd57cd9556cba7a985b6872bc4de53dc2008a09a95fa79401_1.gif',
      display: 'http://static.fjcdn.com/gifs/I_ec5dd6_1931874.gif',
      dataPlayer: '',
      idPlayer: '',
      tes: ''
    }
  },
  methods: {
    clickAttack () {
      this.display = this.attack
      this.$firebaseDB.ref('player/1').update({
        choice: 'attack'
      })
    },
    clickDefence () {
      this.display = this.defence
      this.$firebaseDB.ref('player/1').update({
        choice: 'defend'
      })
    },
    clickBreak () {
      this.display = this.break
      this.$firebaseDB.ref('player/1').update({
        choice: 'break'
      })
    },
    getIdPLayertoLS () {
      var idPlayerLS = localStorage.getItem('id')
      console.log(idPlayerLS)
      this.idPlayer = idPlayerLS
    }
  },
  firebase () {
    return {
      datacore: this.$firebaseDB.ref('login')
    }
  },
  created () {
    this.getIdPLayertoLS()
  }
}
</script>

<style lang="css" scoped>
.tombol {
  border-radius: 100%;
  height: 65px;
  width:  65px;
}
</style>
