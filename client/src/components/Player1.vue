<template lang="html">
  <div class="col-sm-6 col-md-6">
    <div class="panel panel-default">
      <div class="panel-body">
        SCORE : 
      </div>
    </div>
    <div class="thumbnail">
      <img src="https://media.giphy.com/media/ntoC59BF4CRqM/giphy.gif" alt="">
      <div class="caption">
        <h3>player Name</h3>
        <p>
          <!-- <i class="fa fa-shield" aria-hidden="true"></i> -->
          <button class="btn btn-primary tombol" type="button" name="button">
            <span class="glyphicon glyphicon-flash" aria-hidden="true" style="font-size:30px"></span>
          </button> 
          <button class="btn btn-info tombol" type="button" name="button">
            <span class="glyphicon glyphicon-move" aria-hidden="true" style="font-size:30px"></span>
          </button> 
          <button class="btn btn-danger tombol" type="button" name="button">
            <span class="glyphicon glyphicon-fire" aria-hidden="true" style="font-size:30px"></span>
          </button> 
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.tombol {
  border-radius: 100%;
  height: 65px;
  width:  65px;
}
</style>
