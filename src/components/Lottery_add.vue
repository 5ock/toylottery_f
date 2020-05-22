<template>
  <div class="toysLottery_add">
    <h1 class="h2 mb-4">Add Item</h1>
    <form class="form_lotteryAdd">
      <div class="form-group t-maxWidth">
        <label>商品名稱 :</label>
        <input type="text" class="form-control" placeholder="ex: headlockstudio" v-model="data_item">
      </div>
      <div class="form-group t-maxWidth">
        <label>日期 :</label>
        <div style="display:flex">
          <div style="max-width: 150px; flex:1; margin-right:20px">
          <select class="custom-select" v-model="data_year">
            <option value="99">Year</option>
            <option v-for="item in years" :value="item">{{ item }}</option>
          </select>
          </div>
          <div style="max-width: 150px; flex:1; margin-right:20px">
          <select class="custom-select" v-model="data_month">
            <option value="99">Month</option>
            <option v-for="item in month" :value="item">{{ item }}</option>
          </select>
          </div>
          <div style="max-width: 150px;flex:1">
          <select class="custom-select" v-model="data_day">
            <option value="99">Day</option>
            <option v-for="(item, index) in days" :value="item">{{ item }}</option>
          </select>
          </div>
        </div>
      </div>
      <div class="form-group t-maxWidth">
        <label>時間 :</label>
        <div style="display:flex">
          <div style="max-width: 150px; flex:1; margin-right:20px">
          <select class="custom-select" v-model="data_hour">
            <option value="99">Hour</option>
            <option v-for="(item, index) in hour" :value="item">{{ item }}</option>
          </select>
          </div>
          <div style="max-width: 150px;flex:1">
          <select class="custom-select" v-model="data_min">
            <option value="99">Min</option>
            <option v-for="(item, index) in min" :value="item">{{ item }}</option>
          </select>
          </div>
        </div>
      </div>
      <div class="form-group t-maxWidth">
        <label>價格 :</label>
        <input type="text" class="form-control" placeholder="ex: 2000台幣" v-model="data_price">
      </div>
      <div class="form-group t-maxWidth">
        <label>網址 :</label>
        <input type="text" class="form-control" v-model="data_url">
      </div>
      <div class="form-group t-maxWidth">
        <label style="width:110px;">抽選 or 直購 :</label>
        <label for="Lottery" class="radioStyle" :class="{ isSelect: data_isLottery==1 }">抽選</label>
        <input id="Lottery" type="radio" value="1" v-model="data_isLottery" style="display:none">
        <label for="purchase" class="radioStyle" :class="{ isSelect: data_isLottery==0 }">直購</label>
        <input id="purchase" type="radio" value="0" v-model="data_isLottery" style="display:none">
      </div>
      <div class="form-group t-maxWidth">
        <label style="width:110px;">是否通知 :</label>
        <label for="Yes" class="radioStyle" :class="{ isSelect: data_notify=='1' }">要</label>
        <input id="Yes" type="radio" value="1" v-model="data_notify" style="display:none">
        <label for="No" class="radioStyle" :class="{ isSelect: data_notify=='0' }">不要</label>
        <input id="No" type="radio" value="0" v-model="data_notify" style="display:none">
      </div>
      <div class="form-group t-maxWidth">
        <label for="exampleFormControlTextarea1">備註:</label>
        <textarea class="form-control" rows="3" v-model="data_remarks"></textarea>
      </div>
      <button type="button" class="btn btn-info" @click="setData">儲存</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'toysLottery_add',
  data () {
    return {
      data_remarks: "",
      data_url: "",
      data_price: "",
      data_item: "",
      data_isLottery: 1,
      data_notify: 1,
      data_year: '99',
      data_month: '99',
      data_day: '99',
      data_hour: '99',
      data_min: '99',
      years: [],
      month: ['01','02','03','04','05','06','07','08','09','10','11','12'],
    }
  },
  mounted() {
    this.resetData();
    this.getYears();
  },
  methods: {
    getYears() {
      let date = new Date();
      let currentYear = date.getFullYear();
      for(let i=0; i<5; i++) {
        let year = parseInt(currentYear) + i;
        this.years.push(year);
      }
    },
    resetData() {
      this.data_remarks = "";
      this.data_url = "";
      this.data_price = "";
      this.data_item = "";
      this.data_year = '99';
      this.data_month = '99';
      this.data_day = '99';
      this.data_hour = '99';
      this.data_min = '99';
      this.data_isLottery = 1;
      this.data_notify = 1;
    },
    addZero(number) {
      if (parseInt(number) < 10) {
        number = '0'+number;
      }
      return String(number);
    },
    setData() {
      const me = this;
      let obj = {
        item: this.data_item,
        date: {
          year: this.data_year,
          month: this.data_month,
          day: this.data_day,
        },
        time: {
          hour: this.data_hour,
          min: this.data_min
        },
        price: this.data_price,
        url: this.data_url,
        isLottery: this.data_isLottery,
        notification: this.data_notify,
        remarks: this.data_remarks
      }

      console.log(obj);
      me.axios.post('/lotteryData', obj).then((result)=>{
        if(result.data.response == 'ok') {
          me.resetData();
        }
      });
    },
    calDay(num) {
      let ary = [];
      for(let i=1; i<=num; i++) {
        ary.push(this.addZero(i));
      }

      return ary;
    },
    calTime(num) {
      let ary = [];
      for(let i=0; i<num; i++) {
        ary.push(this.addZero(i));
      }

      return ary;
    }
  },
  computed: {
    days() {
      if(this.data_month == '02') {
        return this.calDay(28);
      } else if(this.data_month == '04' || this.data_month == '06' || this.data_month == '09' || this.data_month == '12') {
        return this.calDay(30);
      } else {
        return this.calDay(31);
      }
    },
    hour() {
      return this.calTime(24);
    },
    min() {
      return this.calTime(60);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
