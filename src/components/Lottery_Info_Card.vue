<template>
  <div class="toysLottery_card">
    <div class="card bg-light mb-3 mr-3" style="width:335px;height: 167px;"
      v-for="(obj,index) in lottery_data" :key="index">
      <div class="card-header ly-card-header" :class="{'ly-notExpire': !obj.isExpire}">
        <div class="card-header-text">{{ obj.item }}</div>
        <div v-if="showEdit" class="icon-delete" @click="deleteItem(obj)"></div>
        <div v-if="showEdit" class="icon-edit" @click="editItem(obj._id)"></div>
      </div>
      <div class="card-body" style="padding: 5px 1.25rem; position:relative;">
        <div class="lottery-remind-block">
          <div class="text-lottery">{{ obj.isLottery }}</div>
          <div class="icon-notify" :class="{'On':obj.notify==true, 'Off':obj.notify==false}"></div>
        </div>
        <div class="card-text">日期 : {{ obj.date }}</div>
        <div class="card-text">時間 : {{ obj.time }}</div>
        <div class="card-text">價格 : {{ obj.price }}</div>
        <div class="card-text">連結 : <a @click.prevent="switchPage(obj.url)" class="lottery-link">Click Here</a></div>
        <div class="card-text text-ellipsis" :title="obj.remarks">備註 : {{ obj.remarks }}</div>
      </div>
    <div v-show="obj.isExpire" class="lottery_expired">Expired</div>
    </div>
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'toysLottery_card',
  props: ['lotteryCardData', 'showEdit'],
  data () {
    return {
      a: true,
      // isExpire: false,
      lottery_data: [],
    }
  },
  mounted() {
  },
  methods: {
    switchPage(url) {
      window.open(url);
    },
    addZero(number) {
      if (parseInt(number) < 10) {
        number = '0'+number;
      }
      return String(number);
    },
    checkExpire(date, time) {
      let objDate = new Date();
      let year = objDate.getFullYear();
      let month = objDate.getMonth() + 1;
      let day = objDate.getDate();
      let hour = objDate.getHours();
      let min = objDate.getMinutes();
      let currentDate = year + this.addZero(month) + this.addZero(day);
      let currentTime = this.addZero(hour) + this.addZero(min);

      let data_month = date.year + date.month + date.day;
      let data_time = time.hour + time.min;
      if(data_month > currentDate) {
        return false
      } else if(data_month < currentDate) {
        return true
      } else if(data_time > currentTime) {
        return false;
      } else {
        return true;
      }
    },
    calData() {
      const me = this;
      this.lottery_data = [];
      for(let i=0; i<this.lotteryCardData.length; i++) {
        let obj = {};
        obj.item = this.lotteryCardData[i].item;
        obj.isLottery = this.lotteryCardData[i].isLottery == 1 ? "L" : "B";
        obj.notify = this.lotteryCardData[i].notify == 1 ? true : false;
        obj.date = this.lotteryCardData[i].date.year + "年" + this.lotteryCardData[i].date.month + "月" + this.lotteryCardData[i].date.day + "日";
        obj.price = this.lotteryCardData[i].price;
        obj.time = this.lotteryCardData[i].time.hour + ":" + this.lotteryCardData[i].time.min;
        obj.url = this.lotteryCardData[i].url;
        obj.remarks = this.lotteryCardData[i].remarks;
        obj._id = this.lotteryCardData[i]._id;
        obj.isExpire = this.checkExpire(this.lotteryCardData[i].date, this.lotteryCardData[i].time);

        this.lottery_data.push(obj);
      }
    },
    editItem(id) {
      this.$emit('isClick', id);
    },
    deleteItem(obj) {
      this.$emit('isDelete', obj);
    }
  },
  watch: {
    lotteryCardData() {
      this.calData();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
