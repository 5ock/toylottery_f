<template>
  <div class="toysLottery_add">
    <div class="lottery_info_header">
      <h2 class=" mb-4">Lottery Info</h2>
      <button type="button" class="btn btn-info" @click="openModal('Add')">新增</button>
    </div>

    <!-- lottery info card -->
    <lotteryCard
      :lotteryCardData="lotteryCardList"
      :showEdit="true"
      @isClick="editItem" 
      @isDelete="deleteItem" />
  
    <!-- lottery info modal -->
    <lotteryModal
      v-show="modal_item.showModal"
      :modalData="modal_item.data"
      :title="modal_item.action"
      @closeModal="closeModal"
      @setData="saveData" />

    <!-- popview -->
    <lyPopView ref="lyPopView"></lyPopView>
  </div>
</template>

<script>
import lotteryCard from './Lottery_Info_Card';
import lotteryModal from './Lottery_Info_Modal';
import lyPopView from './ly_popview';

export default {
  components: {
    lotteryCard,
    lotteryModal,
    lyPopView
  },
  name: 'toysLottery_add',
  data () {
    return {
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
    saveData() {
      const me = this;
      this.$refs.lyPopView.wait();
      this.closeModal();
      this.getLotteryList().then(()=>{
        me.$refs.lyPopView.hide();
      });
    },
    deleteItem(obj) {
      const me = this;
      let text = '確定要刪除?'
      this.$refs.lyPopView.check(text).then((ok)=>{
        me.$refs.lyPopView.wait();
        me.axios.delete('/lotteryData', {data:{'obj':obj}}).then((result) => {
          if(result.data.response == 'ok') {
            me.getLotteryList().then(()=>{
              me.$refs.lyPopView.hide();
            });;
          }
        });
      },(cancel)=>{
        console.log(2);
        me.$refs.lyPopView.hide();
      });
    },
    getLotteryList() {
      let newPromsie = new Promise((resolve, reject) => {
        const me = this;
        me.axios.get('/lotteryData').then((result) => {
          // card 順序依到期日期, 可編輯刪除
          // item, data, time, price, url, islottery, notification, remark
          result.data.sort(function(a, b) {
            let a_dateTime = a.date.year + a.date.month + a.date.day + a.time.hour + a.time.min;
            let b_dateTime = b.date.year + b.date.month + b.date.day + b.time.hour + b.time.min;

            if(a_dateTime > b_dateTime) {
              return -1;
            } else {
              return 1;
            }
          });
          me.lotteryCardList = result.data;
          resolve();
        });
      });
      return newPromsie;
    },
    openModal(action) {
      this.modal_item.action = action;
      this.modal_item.showModal = true;
    },
    editItem(id) {
      this.modal_item.action = 'Edit';
      for(let i=0; i<this.lotteryCardList.length; i++) {
        if(this.lotteryCardList[i]._id == id) {
          // obj assign 預防傳址
          this.modal_item.data = Object.assign({}, this.lotteryCardList[i]);
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
        remarks: ''
      };
      // this.modal_item.action = '';
      this.modal_item.showModal = false;
    },
    addZero(number) {
      if (parseInt(number) < 10) {
        number = '0'+number;
      }
      return String(number);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
