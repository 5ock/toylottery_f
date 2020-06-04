<template>
  <div class="lottery_modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalLabel">{{ modal_title }}</h4>
          <button type="button" class="close" @click="closeDialog">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group t-maxWidth">
            <label>商品名稱 :</label>
            <input type="text" class="form-control" placeholder="ex: headlockstudio" v-model="edit_data.item">
          </div>
          <div class="form-group t-maxWidth">
            <label>日期 :</label>
            <div style="display:flex">
              <div style="max-width: 150px; flex:1; margin-right:20px">
              <select class="custom-select" v-model="edit_data.date.year">
                <option value="9999">Year</option>
                <option v-for="item in years" :value="item">{{ item }}</option>
              </select>
              </div>
              <div style="max-width: 150px; flex:1; margin-right:20px">
                <select class="custom-select" v-model="edit_data.date.month">
                  <option value="99">Month</option>
                  <option v-for="item in month" :value="item">{{ item }}</option>
                </select>
              </div>
              <div style="max-width: 150px;flex:1">
                <select class="custom-select" v-model="edit_data.date.day">
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
              <select class="custom-select" v-model="edit_data.time.hour">
                <option value="99">Hour</option>
                <option v-for="(item, index) in hour" :value="item">{{ item }}</option>
              </select>
              </div>
              <div style="max-width: 150px;flex:1">
              <select class="custom-select" v-model="edit_data.time.min">
                <option value="99">Min</option>
                <option v-for="(item, index) in min" :value="item">{{ item }}</option>
              </select>
              </div>
            </div>
          </div>
          <div class="form-group t-maxWidth">
            <label>價格 :</label>
            <input type="text" class="form-control" placeholder="ex: 2000台幣" v-model="edit_data.price">
          </div>
          <div class="form-group t-maxWidth">
            <label>網址 :</label>
            <input type="text" class="form-control" v-model="edit_data.url">
          </div>
          <div class="form-group t-maxWidth">
            <label style="width:110px;">抽選 or 直購 :</label>
            <label for="Lottery" class="radioStyle" :class="{ isSelect: edit_data.isLottery==1 }">抽選</label>
            <input id="Lottery" type="radio" value="1" v-model="edit_data.isLottery" style="display:none">
            <label for="purchase" class="radioStyle" :class="{ isSelect: edit_data.isLottery==0 }">直購</label>
            <input id="purchase" type="radio" value="0" v-model="edit_data.isLottery" style="display:none">
          </div>
          <div class="form-group t-maxWidth">
            <label style="width:110px;">是否通知 :</label>
            <label for="Yes" class="radioStyle" :class="{ isSelect: edit_data.notify=='1' }">要</label>
            <input id="Yes" type="radio" value="1" v-model="edit_data.notify" style="display:none">
            <label for="No" class="radioStyle" :class="{ isSelect: edit_data.notify=='0' }">不要</label>
            <input id="No" type="radio" value="0" v-model="edit_data.notify" style="display:none">
          </div>
          <div class="form-group t-maxWidth">
            <label for="exampleFormControlTextarea1">備註:</label>
            <textarea class="form-control" rows="3" v-model="edit_data.remarks" style="height:40px"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="setData">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toysLottery_modal',
  props: ['modalData', 'title'],
  data () {
    return {
      modal_title: '',
      edit_data: {
        item: '',
        date: {
          year: '9999',
          month: '99',
          day: '99'
        },
        time: {
          hour: '99',
          min: '99'
        },
        price: '',
        isLottery: '1',
        notify: '1',
        remarks: '',
      },
      years: [],
      month: ['01','02','03','04','05','06','07','08','09','10','11','12'],
    }
  },
  mounted() {
    this.getYears();
  },
  methods: {
    setData() {
      const me = this;
      let obj = {};
      obj = this.edit_data;

      if(this.title == "Add") {
        me.axios.post('/lotteryData', obj).then((result)=>{
          if(result.data.response == 'ok') {
            me.closeDialog();
            this.$emit('setData');
          }
        });
      } else {
        me.axios.put('/lotteryData', obj).then((result)=>{
          if(result.data.response == 'ok') {
            me.closeDialog();
            this.$emit('setData');
          }
        });
      }
    },
    closeDialog() {
      this.$emit('closeModal');
    },
    getYears() {
      let date = new Date();
      let currentYear = date.getFullYear();
      for(let i=0; i<5; i++) {
        let year = parseInt(currentYear) + i;
        this.years.push(year);
      }
    },
    addZero(number) {
      if (parseInt(number) < 10) {
        number = '0'+number;
      }
      return String(number);
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
  watch: {
    modalData() {
      this.edit_data = this.modalData;
    },
    title() {
      if(this.title == 'Add') {
        this.modal_title = '新增';
      } else {
        this.modal_title = '編輯';
      }
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
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
