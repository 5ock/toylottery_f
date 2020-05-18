<template>
  <div class="toysLottery_add">
    <h1 class="h2 mb-4">Lottery Info</h1>
    <div style="display:flex;flex-wrap: wrap;">
      <div class="card bg-light mb-3 mr-3" style="width:335px;">
        <div class="card-header">He</div>
        
        <div class="card-body">
          <h5 class="card-title">Light card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toysLottery_add',
  data () {
    return {
    }
  },
  mounted() {
    this.getLotteryList();
  },
  methods: {
    getLotteryList() {
      const me = this;
      me.axios.get('/lotteryData').then((result) => {
        // card 順序依到期日期, 可編輯刪除
        // item, data, time, price, url, islottery, notification, remark
        console.log(result.data);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
