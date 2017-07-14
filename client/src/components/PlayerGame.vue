<template lang="html">
  <div class="bg">
    <div class="container">
      <div class="row">
        <button type="button" name="button" @click="launch">START</button>
        <!-- <h1 id="counter">{{ counter }}</h1> -->
        <h1><input type="Number" v-model="counter"></h1>
        </div>
        <br>
        <br>
        <br>
        <Psatu :hp1="hp1" :choice1="choice1"></Psatu>
        <Pdua :hp2="hp2" :choice2="choice2"></Pdua>
      </div>
    </div>
  </div>
</template>
<script>
import Psatu from '@/components/Player1'
import Pdua from '@/components/Player2'
export default {
  components: {
    Psatu,
    Pdua
  },
  data () {
    return {
      hp1: 100,
      choice1: '',
      hp2: 100,
      choice2: '',
      loader: '',
      counter: 7,
      newHp1: 0,
      newHp2: 0
    }
  },
  firebase () {
    return {
      datacore: this.$firebaseDB.ref('player')
    }
  },
  methods: {
    launch () {
      // var keyId = localStorage.getItem('id')
      this.$firebaseDB.ref('player/1').update({
        health: this.hp1,
        choice: ''
      })
      this.$firebaseDB.ref('player/2').update({
        health: this.hp2,
        choice: ''
      })
      .then(() => {
        this.gameplay()
        console.log(this.counter)
      })
    },
    gameplay () {
      console.log(this.counter)
      var countDownId = setInterval(function (7) {
        console.log('ini counter ', this.counter)
        if (this.counter === 0) {
          this.$firebaseDB.ref('/player/1').on('value', snap => {
            console.log('----------test')
            this.choice1 = snap.val().choice
            console.log(this.hp1)
            this.$firebaseDB.ref('/player/2').on('value', snap2 => {
              this.choice2 = snap2.val().choice
            })
          })
          var combination = [
            [ 'attack', 'defend', 25, 0 ],
            [ 'attack', 'break', 0, 25 ],
            [ 'defend', 'attack', 0, 25 ],
            [ 'defend', 'break', 25, 0 ],
            [ 'break', 'attack', 25, 0 ],
            [ 'break', 'defend', 0, 25 ],
            [ 'attack', 'attack', 15, 15 ],
            [ 'break', 'break', 20, 20 ],
            [ 'defend', 'defend', 0, 0 ],
            [ 'attack', '', 0, 35 ],
            [ 'defend', '', 0, 35 ],
            [ 'break', '', 0, 35 ],
            [ '', 'attack', 35, 0 ],
            [ '', 'defend', 35, 0 ],
            [ '', 'break', 35, 0 ]
          ]
          var newHp1, newHp2
          for (var i = 0; i < combination.length; i++) {
            if (this.choice1 === combination[i][0] && this.choice2 === combination[i][1]) {
              newHp1 = this.hp1 - combination[i][2]
              newHp2 = this.hp2 - combination[i][3]
              console.log('', newHp1)
              console.log('', newHp2)
              // console.log(p1Health.innerHTML)
              // console.log(p1Health.innerHTML, 'ini harusnya angka sisa darah')
              // console.log(p2Health.innerHTML, 'ini harusnya angka sisa darah')
            }
          }
          if (this.hp1 && this.hp2) {
            this.$firebaseDB.ref('/player/1').update({
              choice: this.choice1,
              health: newHp1
            })
            .then(() => {
              this.$firebaseDB.ref('/player/2').update({
                choice: this.choice2,
                health: newHp2
              })
              console.log(this.hp2, 'creasd')
              console.log('ini then abis firebase')
            })
            .catch(err => {
              console.log(err)
            })
          }
          clearInterval(countDownId)
        }
        this.counter -= 1
      }, 1000)
    }
  }
}
</script>
<style lang="css" scoped>
.bg {
  margin-top: 100px;
}
</style>
