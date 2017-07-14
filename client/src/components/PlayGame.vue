<template lang="html">
  <div class="bg">
    <div class="container">
      <div class="row">
        <satu></satu>
        <dua></dua>
      </div>
    </div>
  </div>
</template>

<script>
import satu from '@/components/Player1'
import dua from '@/components/Player2'
export default {
  components: {
    satu,
    dua
  }
}
</script>

<style lang="css">
.bg {
  margin-top: 100px;
}

</style>
