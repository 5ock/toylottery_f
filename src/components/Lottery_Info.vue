<template>
  <div class="toysLottery_add">
    <h1 class="h2 mb-4">Lottery Info</h1>
    <!-- <div style="display:flex;flex-wrap: wrap;">
      <div class="card bg-light mb-3 mr-3" style="width:335px;height: 167px">
        <div class="card-header" style="padding: 5px 1.25rem; position:relative;">
          <div class="card-header-text">Headlockstudio</div>
          <div class="icon-edit" @="editItem()"></div>
        </div>
        <div class="card-body" style="padding: 5px 1.25rem; position:relative;">
          <div class="lottery-remind-block">
            <div class="text-lottery">L</div>
            <div class="icon-notify" :class="{'On':a==true, 'Off':a==false}"></div>
          </div>
          <div class="card-text">日期 : 0519</div>
          <div class="card-text">時間 : 11:00</div>
          <div class="card-text">價格 : 1000台幣</div>
          <div class="card-text ">連結 : <span class="lottery-link">Click Here</span></div>
          <div class="card-text">備註 : 抽啊</div>
        </div>
      </div>
    </div> -->

    <!-- <div class="toysLottery_card" v-for="(item, index) in lotteryCardList"> -->
      <lotteryCard :lotteryCardData="lotteryCardList" :showEdit="true" />
    <!-- </div> -->
  </div>
</template>

<script>
import lotteryCard from './Lottery_InfoCard';

export default {
  components: {
    lotteryCard,
  },
  name: 'toysLottery_add',
  data () {
    return {
      a: true,
      lotteryCardList: [],
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
        me.lotteryCardList = result.data;
        // console.log(result.data);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
