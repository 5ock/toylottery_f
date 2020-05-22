<template>
  <div class="toysLottery_add">
    <div class="lottery_info_header">
      <h2 class=" mb-4">Lottery Info</h2>
      <button type="button" class="btn btn-info" @click="openModal('Add')">新增</button>
    </div>
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

    <lotteryCard :lotteryCardData="lotteryCardList" :showEdit="true" @isClick="editItem" />

    <!-- <div class="lottery_modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
            <button type="button" class="close">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
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
                    <option v-for="(item, index) in days" :value="index+1">{{ index+1 }}</option>
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
                  <option v-for="(item, index) in hour" :value="index">{{ index }}</option>
                </select>
                </div>
                <div style="max-width: 150px;flex:1">
                <select class="custom-select" v-model="data_min">
                  <option value="99">Min</option>
                  <option v-for="(item, index) in min" :value="index">{{ index }}</option>
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
              <textarea class="form-control" rows="3" v-model="data_remarks" style="height:40px"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">儲存</button>
          </div>
        </div>
      </div>
    </div> -->
    
    <lotteryModal
      v-show="modal_item.showModal"
      :modalData="modal_item.data"
      :title="modal_item.action"
      @closeModal="closeModal"
      @setData="getLotteryList" />
  </div>
</template>

<script>
import lotteryCard from './Lottery_Info_Card';
import lotteryModal from './Lottery_Info_Modal';

export default {
  components: {
    lotteryCard,
    lotteryModal
  },
  name: 'toysLottery_add',
  data () {
    return {
      a: true,
      lotteryCardList: [],
      modal_item: {
        showModal: false,
        action: '', //Edit or Add
        data: {},
      },
      modal_show: false,
    }
  },
  mounted() {
    this.getLotteryList();
  },
  methods: {
    // flashData() {

    // }
    addZero(number) {
      if (parseInt(number) < 10) {
        number = '0'+number;
      }
      return String(number);
    },
    getLotteryList() {
      const me = this;
      me.axios.get('/lotteryData').then((result) => {
        // card 順序依到期日期, 可編輯刪除
        // item, data, time, price, url, islottery, notification, remark
        me.lotteryCardList = result.data;
      })
    },
    openModal(action) {
      this.modal_item.action = action;
      this.modal_item.showModal = true;
    },
    editItem(id) {
      this.modal_item.action = 'Edit';
      for(let i=0; i<this.lotteryCardList.length; i++) {
        if(this.lotteryCardList[i]._id == id) {
          this.modal_item.data = this.lotteryCardList[i];
          break;
        }
      }
      this.modal_item.showModal = true;
    },
    closeModal() {
      // reset modal_item.data
      this.modal_item.data = {
        item: '',
        date: {
          year: '99',
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
        remarks: ''
      };
      // this.modal_item.action = '';
      this.modal_item.showModal = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
