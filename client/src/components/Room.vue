<template lang="html">
  <div class="room">
    <div class="jumbotron">
      <h2>WELCOME TO MONSTER FIGHT!!</h2>
      <h4>Create room to play with other user</h4>
      <!-- <router-link to="/" class="btn btn-primary btn-lg">CREATE ROOM</router-link> -->
      <!-- Trigger the modal with a button -->
      <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" @click="randomId()">CREATE ROOM</button>

      <!-- Modal -->
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">

          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">ROOM</h4>
            </div>
            <div class="modal-body">
              <p>ROOM ID: {{ roomMaker.id }}</p>
              <br>
              <p>ROOM NAME: <input type="text" name="" value="" v-model="roomMaker.name"></p>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal" @click="CreateRoom()">Create</button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="list-room">
      <div class="col-md-12">
        <div class="row">
          <div class="col-sm-6 col-md-4" v-for="(dc, index) in datacore">
            <div class="thumbnail">
              <img src="http://www.publicdomainpictures.net/pictures/160000/velka/blue-monster.jpg" alt="...">
              <div class="caption">
                <!-- <h3>{{ datacore.name }}</h3> -->
                <h4>Room Name:</h4>
                <h1>{{ dc.name }}</h1>
                <p><button class="col-md-12 btn btn-primary"type="button" name="button" @click="join(index)">JOIN</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data () {
    return {
      data: '',
      roomMaker: {
        id: '',
        name: '',
        p1: '',
        p2: ''
      },
      roomId: '',
      joingame: []
    }
  },
  firebase () {
    return {
      datacore: this.$firebaseDB.ref('game')
    }
  },
  methods: {
    randomId () {
      let str = '01234567890123456789'
      let length = 5
      let result = ''
      for (let i = length; i > 0; i--) {
        result += str[Math.floor(Math.random() * str.length)]
        console.log(result)
        this.roomMaker.id = result
      }
    },
    CreateRoom () {
      this.$firebaseDB.ref('game').push(this.roomMaker, () => {
        this.roomMaker.name = ''
      })
    },
    join (index) {
      var idUser = localStorage.getItem('id')
      // var idUser2 = localStorage.getItem('id2')
      // var data = this.$firebaseDB.ref('game').child(roomSelected)
      var selectedRoom = this.datacore[index]
      console.log('ini selectedRoom', selectedRoom['.key'])
      if (selectedRoom.p1 !== '') {
        this.$firebaseDB.ref('game/' + selectedRoom['.key'] + '/p2').set(idUser)
        this.$router.push('/ingame')
      } else if (selectedRoom.p2 === '') {
        this.$firebaseDB.ref('game/' + selectedRoom['.key'] + '/p1').set(idUser)
        this.$router.push('/ingame')
      }
      // // if ()
      // data.update({
      //   'p1': idUser
      // })
      // console.log(idUser)
    }
  },
  created () {
    this.randomId()
  }
}
</script>

<style lang="css" scoped>
p {
  text-align: left;
}
.thumbnail {
    height: 411px;
}
h1 {
    margin: 1.1rem;
    font-size: 2em;
}

</style>
